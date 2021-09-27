import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import suncon from "../images/suncon.png";
import cloudcon from "../images/cloudycon.png";
import lightraincon from "../images/lightraincon.png";
import lightningcon from "../images/lightningcon.png";
import heavyraincon from "../images/heavyraincon.png";
import smokecon from "../images/smokecon.png";
import moment from "moment";
import { WeatherModel } from "../model";

interface Props {
  weather: any;
}

type IconProps = {
  [key: string]: any;
};

export const WeatherCard = (props: Props) => {
  var weathericons: IconProps = {
    Clouds: cloudcon,
    Clear: suncon,
    Drizzle: lightraincon,
    Rain: heavyraincon,
    Thunderstorm: lightningcon,
    Smoke: smokecon,
  };
  const renderWeatherItem = () => {
    return props.weather.map((item: WeatherModel) => {
      return (
        <Grid
          key={item.date}
          item
          component={Card}
          xs={12}
          md={2}
          m={2}
          className="card weather"
        >
          <CardContent>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              component="p"
              style={{ textTransform: "uppercase", fontWeight: "bold" }}
            >
              {moment(item.date).format("ddd")}
            </Typography>
            <CardMedia
              className="image"
              component="img"
              alt="Sun"
              image={weathericons[item.main.toString()]}
            />
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {Number.parseInt(item.feels_like) + "°"}
            </Typography>

            <Typography variant="body2" color="textSecondary" align="center">
              {item.main}
            </Typography>
          </CardContent>
        </Grid>
      );
    });
  };

  if (!props.weather) {
    return null;
  }

  return (
    <div className="weather-card">
      <Grid
        container
        display="flex"
        justifyContent="space-around"
        position="absolute"
        bottom={0}
        padding="10px"
      >
        {renderWeatherItem()}
      </Grid>
    </div>
  );
};

export default WeatherCard;
