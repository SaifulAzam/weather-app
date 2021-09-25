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
import React from "react";

interface Props {
  show: boolean;
  handleClose: any;
  zip_code?: number;
  onChangeZipCode?: any;
  onSubmit?: any;
}

export const SearchLocationDialog = ({
  show,
  handleClose,
  zip_code,
  onChangeZipCode,
  onSubmit,
}: Props) => {
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
            value={zip_code}
            margin="dense"
            id="name"
            label="Zip Code"
            type="number"
            fullWidth
            variant="standard"
            onChange={onChangeZipCode}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={onSubmit}
          style={{ backgroundColor: "#202D5A", color: "white", padding: 5 }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SearchLocationDialog;
