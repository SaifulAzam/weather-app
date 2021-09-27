import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { LocationModel } from "../model";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchLocationDialog from "./SearchLocationDialog";
import { WeatherAppContext } from "../context/AppContext";
import Tooltip from "@mui/material/Tooltip";

interface Props {}

export const AppTopBar = ({}: Props) => {
  const [searchDialogVisibility, setSearchDialogVisibility] =
    React.useState(false);

  const weatherContext = useContext(WeatherAppContext);
  const location = weatherContext?.location;

  const handleSearchDialog = () => {
    setSearchDialogVisibility(!searchDialogVisibility);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        style={{ backgroundColor: "transparent" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          <Tooltip title="Search Location" arrow disableInteractive={true}>
            <Button
              onClick={handleSearchDialog}
              color="inherit"
              endIcon={<KeyboardArrowDownIcon />}
            >{`${location?.City}, ${location?.State}`}</Button>
          </Tooltip>
        </Toolbar>
        <SearchLocationDialog
          show={searchDialogVisibility}
          handleClose={handleSearchDialog}
        />
      </AppBar>
    </Box>
  );
};

export default AppTopBar;
