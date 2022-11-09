import React from "react";
import { Grid, MenuItem, TextField, Stack, Box } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useMediaQuery } from "react-responsive";

const PersonalInformation = () => {
  const isSmall = useMediaQuery({
    query: "(max-width: 600px)",
  });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label="Type of Admission"
          size="small"
          variant="outlined"
          fullWidth
          select
          required
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="On-site">On-site</MenuItem>
          <MenuItem value="On-line">On-line</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  size="small"
                  variant="outlined"
                  fullWidth
                  select
                >
                  <MenuItem value="">Select</MenuItem>
                  <MenuItem value="Mr.">Mr.</MenuItem>
                  <MenuItem value="Mrs.">Mrs.</MenuItem>
                  <MenuItem value="Miss">Miss</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Guardian / Father's Name"
                  size="small"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Stack flexDirection={isSmall ? "column" : "row"}>
              <div>
                <label htmlFor="photo">Photo *</label>
                <Box className="picture">
                  <CameraAltIcon fontSize="large" className="pic-icon" />
                </Box>
              </div>
              <ul className="pic-points">
                <li>Upload photo with white background only.</li>
                <li>Max. 400KB image size is allowed</li>
              </ul>
            </Stack>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Gender"
          size="small"
          variant="outlined"
          fullWidth
          select
          required
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Date of Birth"
          type="date"
          size="small"
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          label="Marital Status"
          size="small"
          variant="outlined"
          fullWidth
          select
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="Single">Single</MenuItem>
          <MenuItem value="Married">Married</MenuItem>
          <MenuItem value="Divorced">Divorced</MenuItem>
          <MenuItem value="Separated">Separated</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Blood Group"
          size="small"
          variant="outlined"
          fullWidth
          select
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="O+">O+</MenuItem>
          <MenuItem value="O-">O-</MenuItem>
          <MenuItem value="A+">A+</MenuItem>
          <MenuItem value="A-">A-</MenuItem>
          <MenuItem value="B+">B+</MenuItem>
          <MenuItem value="B-">B-</MenuItem>
          <MenuItem value="AB+">AB+</MenuItem>
          <MenuItem value="AB-">AB-</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Religion"
          size="small"
          variant="outlined"
          fullWidth
          required
        />
      </Grid>
    </Grid>
  );
};

export default PersonalInformation;
