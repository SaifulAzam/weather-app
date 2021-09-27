import { Box } from "@mui/system";
import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import suncon from "../images/suncon.png";
import cloudcon from "../images/cloudycon.png";
import lightraincon from "../images/lightraincon.png";
import lightningcon from "../images/lightningcon.png";
import heavyraincon from "../images/heavyraincon.png";
import smokecon from "../images/smokecon.png";
import moment from "moment";
import { WeatherAppContext } from "../context/AppContext";
import { WeatherModel } from "../model";

interface Props {}

type IconProps = {
  [key: string]: any;
};

export const CurrentWeather = ({}: Props) => {
  const weatherContext = React.useContext(WeatherAppContext);
  //@ts-ignore
  const weather: WeatherModel = weatherContext?.currentWeatherData;

  var weathericons: IconProps = {
    Clouds: cloudcon,
    Clear: suncon,
    Drizzle: lightraincon,
    Rain: heavyraincon,
    Thunderstorm: lightningcon,
    Smoke: smokecon,
  };

  if (!weather) {
    return null;
  }
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <Typography variant="body1" style={{ color: "white" }}>
        Today ({moment(weather.date).format("dddd")})
      </Typography>
      <img src={weathericons[weather.main?.toString()]} />
      <Typography
        gutterBottom
        variant="h1"
        component="h1"
        color="Highlight"
        style={{ margin: 0 }}
      >
        {Number.parseInt(weather.feels_like) + "°"}
      </Typography>
      <Typography variant="h4" color="textSecondary" style={{ color: "white" }}>
        {weather.description}
      </Typography>
    </Box>
  );
};

export default CurrentWeather;
