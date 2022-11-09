import React from "react";
import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { useNavigate } from "react-router-dom";

const Instructions = () => {
  const navigate = useNavigate();

  return (
    <div style={{ margin: "0 15px" }} className="justify">
      <Container component={Paper} elevation={10} sx={{ p: 3, my: 2 }}>
        <Typography variant="h4" fontWeight={700}>
          Instructions
        </Typography>

        <br />
        <Divider />
        <br />

        <Typography>
          Dear <strong>--------------------------</strong>,
        </Typography>
        <Typography>
          Welcome to <strong>PAKISTAN - ITHUB!</strong>
        </Typography>
        <Typography gutterBottom>
          Your Roll # is <strong>--------</strong>. Remember it for future use.
        </Typography>
        <Typography variant="h6" fontWeight={600} textAlign="center">
          Guildline for Filling the Application Form
        </Typography>

        <Typography gutterBottom>
          1. Field mention with{" "}
          <strong style={{ color: "#ff0000" }}>(*)</strong> are mandatory to
          fill.
        </Typography>
        <Typography gutterBottom>
          2. After filling each section, kindly click the{" "}
          <strong style={{ color: "#ff0000" }}>Next</strong> button available on
          that page.
        </Typography>
        <Typography gutterBottom>
          3. You can also upload copies of your academic qualifications in PDF
          format.{" "}
          <a
            href="https://www.ilovepdf.com/jpg_to_pdf"
            target="_blank"
            rel="noreferrer"
            className="a"
          >
            Click here to convert your images in PDF format
          </a>
        </Typography>
        <Typography gutterBottom>
          4. The size of your photo should not exceed{" "}
          <strong style={{ color: "#ff0000" }}>400KB</strong> and the background
          of your photo is white.
        </Typography>
        <Typography gutterBottom>
          5.&nbsp;Application processing fee of&nbsp;
          <strong style={{ color: "#ff0000" }}>Rs. 500/=</strong>&nbsp;has to be
          paid in HBL (Habib Bank Limited). Print application processing fee
          challan&nbsp;
          <LocalPrintshopIcon fontSize="small" />. Print in landscape layout.
        </Typography>
        <Typography gutterBottom>
          6. Write down your information correctly and be careful about that.
        </Typography>
        <Button
          variant="outlined"
          onClick={() => navigate("/dashboard/application-form")}
        >
          Let's Begin Your Application!
        </Button>

        <br />
        <br />
        <Divider />
        <br />

        <Typography variant="h5" fontWeight={600} gutterBottom>
          In case of any query, contact us via
        </Typography>
        <Typography>WhatsApp: +92-322-8584685</Typography>
        <Typography>Phone: +92-42-3535629</Typography>
        <Typography>Mail: support@pithub.edu.pk</Typography>
      </Container>
    </div>
  );
};

export default Instructions;
