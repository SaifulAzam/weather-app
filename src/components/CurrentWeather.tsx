import { Box } from "@mui/system";
import React from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Typography } from "@mui/material";
import suncon from "../images/suncon.png";
import cloudcon from "../images/cloudycon.png";
import lightraincon from "../images/lightraincon.png";
import lightningcon from "../images/lightningcon.png";
import heavyraincon from "../images/heavyraincon.png";
import smokecon from "../images/smokecon.png";

interface Props {
  weather: any;
}

type IconProps = {
  [key: string]: any;
};

export const CurrentWeather = ({ weather }: Props) => {
  var weathericons: IconProps = {
    Clouds: cloudcon,
    Clear: suncon,
    Drizzle: lightraincon,
    Rain: heavyraincon,
    Thunderstorm: lightningcon,
    Smoke: smokecon,
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      mt={10}
    >
      <img src={weathericons[weather[2]?.toString()]} />

      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          gutterBottom
          variant="h1"
          component="h1"
          color="Highlight"
          style={{ margin: 0 }}
        >
          {Number.parseInt(weather[1]) + "°"}
        </Typography>
        <Typography
          variant="h4"
          color="textSecondary"
          style={{ color: "white" }}
        >
          {weather[2]}
        </Typography>
      </Box>
      {/* <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        style={{ color: "white" }}
      >
        {weather[0].toString().substring(0, 15)}
      </Typography> */}
    </Box>
  );
};

export default CurrentWeather;
