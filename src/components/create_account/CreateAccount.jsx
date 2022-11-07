import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  AlternateEmailRounded,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { Link } from "react-router-dom";

const CreateAccount = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveStep(activeStep + 1);
  };

  return (
    <div
      className="create-account"
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Paper elevation={10} sx={{ p: 3 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            <Step>
              <StepLabel>Personal Information</StepLabel>
            </Step>
            <Step>
              <StepLabel>Email &amp; Password</StepLabel>
            </Step>
            <Step>
              <StepLabel>Final, Invite Your Friends</StepLabel>
            </Step>
          </Stepper>

          <br />

          <Typography gutterBottom>
            (<strong style={{ color: "#ff0000" }}>*</strong>) means mandatory
            fields.
          </Typography>
          <Typography gutterBottom>
            Once you fill out the fields of{" "}
            <strong style={{ color: "#ff0000" }}>Personal Information</strong>,
            you will not be able to change it on your application form.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Already have an account?{" "}
            <Link className="a" to="/">
              Log In
            </Link>
          </Typography>
          <Typography variant="body2" gutterBottom>
            Forgot Password?{" "}
            <Link to="/forgot-password" className="a">
              Help Me
            </Link>
          </Typography>

          <br />

          {activeStep === 0 && (
            <>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="First Name"
                      size="small"
                      variant="outlined"
                      autoFocus
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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="D.O.B."
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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="NIC #"
                      type="number"
                      size="small"
                      variant="outlined"
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Stack flexDirection="row" justifyContent="center">
                      <Button type="submit" variant="contained">
                        Next
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </form>
            </>
          )}

          {activeStep === 1 && (
            <>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack alignItems="center">
                      <TextField
                        label="Email"
                        type="email"
                        size="small"
                        variant="outlined"
                        style={{
                          maxWidth: 500,
                          width: "100%",
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <AlternateEmailRounded />
                            </InputAdornment>
                          ),
                        }}
                        autoFocus
                        fullWidth
                        required
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack alignItems="center">
                      <TextField
                        label="Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        size="small"
                        style={{
                          maxWidth: 500,
                          width: "100%",
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        required
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack alignItems="center">
                      <TextField
                        label="Confirm Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        size="small"
                        style={{
                          maxWidth: 500,
                          width: "100%",
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              <IconButton
                                onClick={() => setShowPassword(!showPassword)}
                                edge="end"
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        required
                        fullWidth
                      />
                    </Stack>
                  </Grid>
                  <Grid item xs={12}>
                    <Stack flexDirection="row" justifyContent="center">
                      <Button
                        variant="contained"
                        onClick={() => setActiveStep(activeStep - 1)}
                      >
                        Prev
                      </Button>
                      &nbsp;&nbsp;
                      <Button type="submit" variant="contained">
                        Next
                      </Button>
                    </Stack>
                  </Grid>
                </Grid>
              </form>
            </>
          )}

          {activeStep === 2 && (
            <>
              <Stack flexDirection="row" justifyContent="center">
                <Tooltip title="Share on Facebook">
                  <div>
                    <FacebookShareButton
                      url="https://www.pithub.edu.pk"
                      title="PAKISTAN - ITHUB"
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </div>
                </Tooltip>
                &nbsp;&nbsp;&nbsp;
                <Tooltip title="Share on Twitter">
                  <div>
                    <TwitterShareButton
                      url="https://www.pithub.edu.pk"
                      title="PAKISTAN - ITHUB"
                      className="Demo__some-network__share-button"
                    >
                      <TwitterIcon size={32} round />
                    </TwitterShareButton>
                  </div>
                </Tooltip>
                &nbsp;&nbsp;&nbsp;
                <Tooltip title="Share on WhatsApp">
                  <div>
                    <WhatsappShareButton
                      url="https://www.pithub.edu.pk"
                      title="PAKISTAN - ITHUB"
                      separator=":: "
                    >
                      <WhatsappIcon size={32} round />
                    </WhatsappShareButton>
                  </div>
                </Tooltip>
                &nbsp;&nbsp;&nbsp;
                <Tooltip title="Share on Email">
                  <div>
                    <EmailShareButton
                      url="https://www.pithub.edu.pk"
                      subject={`Enroll Now`}
                    >
                      <EmailIcon size={32} round />
                    </EmailShareButton>
                  </div>
                </Tooltip>
              </Stack>
              <br />
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Stack flexDirection="row" justifyContent="center">
                    <Button
                      variant="contained"
                      onClick={() => setActiveStep(activeStep - 1)}
                    >
                      Prev
                    </Button>
                    &nbsp;&nbsp;
                    <Button type="submit" variant="contained">
                      Register Myself
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </>
          )}
        </Paper>
      </Container>
    </div>
  );
};

export default CreateAccount;
