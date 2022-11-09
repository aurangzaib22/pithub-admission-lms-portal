import React from "react";
import { Grid, MenuItem, TextField, Box } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const NationalityAndResidenceInfo = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label="ID Type"
          size="small"
          variant="outlined"
          fullWidth
          select
          required
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="NIC">NIC</MenuItem>
          <MenuItem value="B-Form">B-Form</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Applicant NIC / B-Form No. (NIC)"
          size="small"
          variant="outlined"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Guardian / Father's NIC"
          size="small"
          variant="outlined"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <label htmlFor="photo">
          <b>NIC / B-Form Image</b> *
        </label>
        <Box className="picture">
          <CameraAltIcon fontSize="large" className="pic-icon" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <label htmlFor="photo">
          <b>Guardian / Father's NIC Image</b>
        </label>
        <Box className="picture">
          <CameraAltIcon fontSize="large" className="pic-icon" />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TextField
          label="Nationality"
          size="small"
          variant="outlined"
          fullWidth
          required
        />
      </Grid>
    </Grid>
  );
};

export default NationalityAndResidenceInfo;
