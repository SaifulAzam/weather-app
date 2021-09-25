import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

interface Props {
  open: boolean;
}

const WeatherDetails = ({ open }: Props) => {
  return (
    <Drawer anchor="bottom" open={open} style={{ height: "100vh" }}>
      asdfa
    </Drawer>
  );
};

export default WeatherDetails;
