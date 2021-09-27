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
  const [zipCode, setZipCode] = React.useState<number | undefined>(undefined);

  const handleZipCodeChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (event.target.value) {
      setZipCode(Number(event.target.value));
    }
  };

  const onSubmitZipCode = () => {
    weatherContext?.updateZipCode(zipCode);
    handleClose();
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
