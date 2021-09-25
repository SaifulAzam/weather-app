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
    return props.weather.map((item: any) => {
      return (
        <Grid
          key={item[0]}
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
              {moment(item[0]).format("ddd")}
            </Typography>
            <CardMedia
              className="image"
              component="img"
              alt="Sun"
              image={weathericons[item[2].toString()]}
            />
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {Number.parseInt(item[1]) + "°"}
            </Typography>

            <Typography variant="body2" color="textSecondary" align="center">
              {item[2]}
            </Typography>
          </CardContent>
        </Grid>
      );
    });
  };
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
