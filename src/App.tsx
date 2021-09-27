import { CircularProgress, Grid } from "@mui/material";
import React, { Component } from "react";
import { fetchData, fetchToday, fetchZipCode } from "./api";
import AppTopBar from "./components/AppTopBar";
import CurrentWeather from "./components/CurrentWeather";
import WeatherCard from "./components/WeatherCard";
import { WeatherAppContext } from "./context/AppContext";

export default function App() {
  const weatherContext = React.useContext(WeatherAppContext);
  const { futuredays }: any = weatherContext?.forecastWeatherData;

  return (
    <div className="weather">
      <div className="container">
        <AppTopBar />
        <CurrentWeather />
        <WeatherCard weather={futuredays} />
      </div>
    </div>
  );
}
