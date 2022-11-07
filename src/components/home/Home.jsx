import React, { useState } from "react";
import {
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Copyright from "../common/copyright/Copyright";
import Logo from "../../assets/images/logo.jpg";
import { Link } from "react-router-dom";
import {
  Visibility,
  VisibilityOff,
  AlternateEmailRounded,
} from "@mui/icons-material";

const Home = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="log-in">
      <Container>
        <Stack alignItems="center">
          <Paper
            sx={{
              p: 3,
              maxWidth: 400,
              width: "100%",
              boxShadow: "0 0 5px 3px #fff",
            }}
            elevation={5}
          >
            <Stack alignItems="center">
              <img src={Logo} alt="PAKISTAN - ITHUB" width={230} height={220} />
            </Stack>
            <Typography variant="h4" textAlign="center" fontWeight={500}>
              Welcome back
            </Typography>
            <Typography variant="body2" textAlign="center" gutterBottom>
              Enter your valid details.
            </Typography>
            <TextField
              label="Email"
              variant="outlined"
              type="email"
              size="small"
              margin="dense"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailRounded />
                  </InputAdornment>
                ),
              }}
              required
              fullWidth
            />
            <TextField
              label="Password"
              variant="outlined"
              margin="dense"
              type={showPassword ? "text" : "password"}
              size="small"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              required
              fullWidth
            />
            <Button
              variant="contained"
              sx={{ mt: 0.7, borderRadius: 30 }}
              fullWidth
            >
              Log in
            </Button>

            <Stack alignItems="flex-end" sx={{ mt: 1 }}>
              <Link to="/" className="a">
                Forgot Password?
              </Link>
            </Stack>

            <Stack
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              sx={{ mt: 1 }}
            >
              <Typography fontWeight={500}>
                <Link to="/create-account" className="a">
                  CREATE ACCOUNT
                </Link>
              </Typography>
              <Typography fontWeight={500}>
                <Link to="/" className="a">
                  NEED HELP?
                </Link>
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Container>
      <Copyright />
    </div>
  );
};

export default Home;
