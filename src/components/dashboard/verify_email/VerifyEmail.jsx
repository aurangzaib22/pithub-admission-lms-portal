import React, { useState } from "react";
import {
  Button,
  Container,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import MailPNG from "../../../assets/images/mail.png";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [txt, setTxt] = useState("Copy");

  const handleCopy = () => {
    window.navigator.clipboard.writeText("https://www.google.com/");
    setTxt("Copied");
  };

  const navigate = useNavigate();
  return (
    <Container sx={{ my: 5 }}>
      <Paper elevation={10} sx={{ p: 3, width: "100%" }}>
        <Stack alignItems="center">
          <img src={MailPNG} alt="PAKISTAN - ITHUB" width={200} height={200} />
          <Typography
            variant="h4"
            fontWeight={900}
            textAlign="center"
            gutterBottom
          >
            Verify Your Email
          </Typography>
          <Typography gutterBottom>
            You've entered ----email---- as the email address for your account.
          </Typography>
          <Typography>
            Verify this email address by clicking button below.
          </Typography>

          <br />

          <Button
            variant="contained"
            onClick={() => navigate("/dashboard/instructions")}
          >
            Verify
          </Button>

          <br />

          <Typography variant="body2" gutterBottom>
            Or copy and paste this link into your browser
          </Typography>
          <Stack flexDirection="row" alignItems="center">
            <a
              href="https://www.google.com/"
              target="_blank"
              className="a"
              rel="noreferrer"
            >
              https://www.google.com/
            </a>
            &nbsp;
            <Tooltip title={txt}>
              <ContentCopyIcon
                fontSize="small"
                onClick={handleCopy}
                onMouseLeave={() =>
                  setTimeout(() => {
                    setTxt("Copy");
                  }, 90)
                }
                style={{ cursor: "pointer" }}
              />
            </Tooltip>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default VerifyEmail;
