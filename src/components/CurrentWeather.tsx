import { Box } from "@mui/system";
import React, { useState } from "react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { Button, Typography } from "@mui/material";
import suncon from "../images/suncon.png";
import cloudcon from "../images/cloudycon.png";
import lightraincon from "../images/lightraincon.png";
import lightningcon from "../images/lightningcon.png";
import heavyraincon from "../images/heavyraincon.png";
import smokecon from "../images/smokecon.png";
import moment from "moment";
import WeatherDetails from "./WeatherDetails";

interface Props {
  weather: any;
}

type IconProps = {
  [key: string]: any;
};

export const CurrentWeather = ({ weather }: Props) => {
  const [detailDrawerOpen, setDetailDrawerOpen] = useState(false);

  var weathericons: IconProps = {
    Clouds: cloudcon,
    Clear: suncon,
    Drizzle: lightraincon,
    Rain: heavyraincon,
    Thunderstorm: lightningcon,
    Smoke: smokecon,
  };

  const toggleDetailDrawer = () => {
    setDetailDrawerOpen(!detailDrawerOpen);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={10}>
      <Typography variant="body1" style={{ color: "white" }}>
        Today ({moment(weather[0]).format("dddd")})
      </Typography>
      <img src={weathericons[weather[2]?.toString()]} />
      <Typography
        gutterBottom
        variant="h1"
        component="h1"
        color="Highlight"
        style={{ margin: 0 }}
      >
        {Number.parseInt(weather[1]) + "°"}
      </Typography>
      <Typography variant="h4" color="textSecondary" style={{ color: "white" }}>
        {weather[2]}
      </Typography>

      {/* <Button
        style={{ marginTop: "20px" }}
        onClick={() => toggleDetailDrawer()}
      >
        Details
      </Button> */}
      {/* <WeatherDetails
        open={detailDrawerOpen}
        onClose={toggleDetailDrawer}
        weather={weather}
      /> */}
    </Box>
  );
};

export default CurrentWeather;
