import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { WeatherAppContext } from "../context/AppContext";
import React from "react";
interface Props {
  show: boolean;
  handleClose: any;
}

export const SearchLocationDialog = ({ show, handleClose }: Props) => {
  const weatherContext = React.useContext(WeatherAppContext);
  const [zipCode, setZipCode] = React.useState("");
  const [error, setError] = React.useState("");

  const handleZipCodeChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.target.value) {
      setZipCode(event.target.value);
    }
    setError("");
  };

  const onSubmitZipCode = () => {
    if (zipCode.toString().length >= 5) {
      weatherContext?.updateZipCode(Number(zipCode));
      handleClose();
    } else {
      setError("you entered wrong zip code");
    }
  };

  return (
    <Dialog open={show} onClose={handleClose} fullWidth>
      <DialogTitle>Location</DialogTitle>
      <DialogContent>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
        >
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter your zip code"
            type="number"
            fullWidth
            variant="standard"
            onChange={handleZipCodeChange}
            error={error ? true : false}
            helperText={error ? error : ""}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={onSubmitZipCode}
          style={{ backgroundColor: "#202D5A", color: "white", padding: 5 }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SearchLocationDialog;
