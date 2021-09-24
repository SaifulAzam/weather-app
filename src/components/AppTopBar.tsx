import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import { LocationModel } from "../model";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchLocationDialog from "./SearchLocationDialog";

interface Props {
  location: LocationModel;
  searchDialogVisibility: boolean;
  handelSearchDialogChange: any;
  zip_code?: number;
  onChangeZipCode?: any;
  onSubmit?: any;
}

export const AppTopBar = ({
  location,
  searchDialogVisibility,
  handelSearchDialogChange,
  zip_code,
  onChangeZipCode,
  onSubmit,
}: Props) => {
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
          <Button
            onClick={handelSearchDialogChange}
            color="inherit"
            endIcon={<KeyboardArrowDownIcon />}
          >{`${location.City}, ${location.State}`}</Button>
        </Toolbar>
        <SearchLocationDialog
          zip_code={zip_code}
          onChangeZipCode={onChangeZipCode}
          show={searchDialogVisibility}
          handleClose={handelSearchDialogChange}
          onSubmit={onSubmit}
        />
      </AppBar>
    </Box>
  );
};

export default AppTopBar;
