import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY
const ZIP_KEY = process.env.REACT_APP_ZIP_KEY
const url = `https://api.openweathermap.org/data/2.5/forecast`;
const todayURL = `https://api.openweathermap.org/data/2.5/weather`;
const zipURL = `https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/`;


export const fetchZipCode = async (zip: number) => {
    try {
        // Fetch data from zip code API
        const { data } = await axios.get(`${zipURL}/${zip}?key=${ZIP_KEY}`);
        if (!data.Error) {
            return data;
        }
        return "Error";

    } catch (error) {
        console.log(error);
    }

}

export const fetchToday = async (zip_code: number) => {
    // Fetch weather data for today
    try {
        const { data: { dt, name, main, weather } } = await axios.get(`${todayURL}?zip=${zip_code}&appid=${API_KEY}`);
        return tempDataChange(weather, dt, main)
    } catch (error) {
        console.log(error);
    }
}

export const fetchData = async (zip_code: number) => {
    // Fetch data for 5 day forecast
    try {
        const { data: { city, list } } = await axios.get(`${url}?zip=${zip_code}&appid=${API_KEY}`);
        var i;
        var days = [];

        for (i = 0; i < list.length; i += 8) {
            const maxTemp = findMax(list, i);
            var temp = {
                date: new Date(list[i + 5].dt_txt),
                feels_like: maxTemp,
                main: list[i].weather[0].main,
                description: list[i].weather[0].description,
                icon: list[i].weather[0].icon
            }
            days.push(temp);
        }

        const selectedData = {
            city,
            futuredays: days
        }

        return selectedData;

    } catch (error) {
        console.log(error);
    }
}

const tempDataChange = (weather: any, dt?: any, main?: any) => {

    var temp = {
        date: new Date(dt * 1000),
        feels_like: ((main.feels_like * 9 / 5) - 459.67).toFixed(1),
        main: weather[0].main,
        description: weather[0].description,
        icon: weather[0].icon
    }
    return [temp]
}

// Finds max temperature in the day
const findMax = (weatherList: { [x: string]: { main: { feels_like: number; }; }; }, start: number) => {
    var i;
    var max = 0;
    for (i = start; i < start + 8; i++) {
        max = Math.max(max, weatherList[i].main.feels_like);
    }
    //@ts-ignore
    max = ((max * 9 / 5) - 459.67).toFixed(1);
    return max;
}

// Finds min temperature in the day
const findMin = (weatherList: { [x: string]: { main: { feels_like: number; }; }; }, start: number) => {
    var i;
    var min = 0;
    for (i = start; i < start + 8; i++) {
        min = Math.min(min, weatherList[i].main.feels_like);
    }
    //@ts-ignore
    min = ((min * 9 / 5) - 459.67).toFixed(1);
    return min;
}