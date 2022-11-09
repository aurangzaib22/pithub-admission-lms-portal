import React from "react";
import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const ForgotPassword = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      style={{ height: "100vh", width: "100%" }}
    >
      <Container component={Paper} elevation={10} sx={{ p: 3 }}>
        ِ
        <Typography variant="h3" textAlign="center" fontWeight={700}>
          Forgot Your Password?
        </Typography>
        <Typography variant="body2" textAlign="center" gutterBottom>
          No problem. We're here to help you.
        </Typography>
        <br />
        <form>
          <TextField
            label="Registered Email"
            variant="outlined"
            size="small"
            fullWidth
            required
          />

          <Button variant="contained" sx={{ mt: 1.5 }}>
            Reset Password
          </Button>
        </form>
      </Container>
    </Stack>
  );
};

export default ForgotPassword;
