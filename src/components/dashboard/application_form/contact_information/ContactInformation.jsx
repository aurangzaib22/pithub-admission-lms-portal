import {
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const ContactInformation = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          label="Preferred Correspondence Address"
          size="small"
          variant="outlined"
          fullWidth
          select
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="Current Address">Current Address</MenuItem>
          <MenuItem value="Present Address">Present Address</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom>
          <b>Permanent Address</b>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              label="House #"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Street Address"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Town / Mohalla"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Postal Code"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Country"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Province"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography>
          <b>Current Address</b>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="gilad" />}
              label="Same as Permanent Address"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="House #"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Street Address"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              label="Town / Mohalla"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="City"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Postal Code"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Country"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Province"
              size="small"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography gutterBottom>
          <b>Emergency Contact Information</b>
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Emergence Contact Full Name"
              size="small"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Emergence Number"
              size="small"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactInformation;
