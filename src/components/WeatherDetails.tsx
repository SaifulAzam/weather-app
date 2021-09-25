import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

interface Props {
  open: boolean;
  onClose: any;
  weather: any;
}

const WeatherDetails = ({ open, onClose }: Props) => {
  return (
    <Drawer
      anchor="bottom"
      open={open}
      style={{
        height: "calc(100%)",
        top: 64,
      }}
      onClose={onClose}
      variant="temporary"
    >
      <Box style={{ color: "white" }} className="sunny_bg" display="flex">
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
        <p>sdafaswdfa</p>
      </Box>
    </Drawer>
  );
};

export default WeatherDetails;
