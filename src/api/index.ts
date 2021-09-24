import axios from 'axios';
const API_KEY = "1db25395df2c8e9794783f9acd36f51d"
const ZIP_KEY = "RJRWNYN4ZF6BFB27EP8R"
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
    // Get date, main forecast, description
    try {
        const { data: { dt, name, main, weather } } = await axios.get(`${todayURL}?zip=${zip_code}&appid=${API_KEY}`);
        var today = [];
        today.push(new Date(dt * 1000));
        today.push(((main.feels_like * 9 / 5) - 459.67).toFixed(1));
        today.push(weather[0].main);
        today.push((weather[0].description));
        today.push((weather[0].icon));

        return [today];

    } catch (error) {
        console.log(error);
    }
}

export const fetchData = async (zip_code: number) => {
    // Fetch data for 5 day forecast
    // Get data for date, temperature, weather description
    try {
        const { data: { city: { name }, list } } = await axios.get(`${url}?zip=${zip_code}&appid=${API_KEY}`);
        var i;
        var days = [];

        for (i = 0; i < list.length; i += 8) {
            var temp = [];
            temp.push(new Date(list[i + 5].dt_txt));
            const maxTemp = findMax(list, i);
            temp.push(maxTemp);
            temp.push(list[i].weather[0].main);
            temp.push(list[i + 3].weather[0].description);
            temp.push(list[i].weather[0].icon);
            days.push(temp);
        }

        const selectedData = {
            cityname: name,
            futuredays: days
        }
        return selectedData;

    } catch (error) {
        console.log(error);
    }
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