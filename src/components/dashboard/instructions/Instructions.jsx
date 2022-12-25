import React, { useState } from "react";
import {
  AppBar,
  Button,
  Container,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Paper,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";
import { Close as CloseIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import Challan from "./challan/Challan";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Instructions = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navigate = useNavigate();

  return (
    <>
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
            Your Roll # is <strong>--------</strong>. Remember it for future
            use.
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
            <strong style={{ color: "#ff0000" }}>Next</strong> button available
            on that page.
          </Typography>
          <Typography gutterBottom>
            3. You can also upload copies of your academic qualifications in PDF
            format.{" "}
            <a
              href="https://www.ilovepdf.com/jpg_to_pdf"
              target="_blank"
              rel="noreferrer"
              className="a"
              style={{ color: "#0000EE" }}
            >
              Click here
            </a>
            &nbsp;to convert your images in PDF format
          </Typography>
          <Typography gutterBottom>
            4. The size of your photo should not exceed{" "}
            <strong style={{ color: "#ff0000" }}>400KB</strong> and the
            background of your photo is white.
          </Typography>
          <Typography gutterBottom>
            5.&nbsp;Application processing fee of&nbsp;
            <strong style={{ color: "#ff0000" }}>Rs. 500/=</strong>&nbsp;has to
            be paid in HBL (Habib Bank Limited). Print application processing
            fee challan&nbsp;
            <IconButton onClick={handleClickOpen}>
              <LocalPrintshopIcon fontSize="small" />
            </IconButton>
            . Print in landscape layout.
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

      {/* // ? Challan Form */}

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography
              sx={{ ml: 2, flex: 1 }}
              variant="h6"
              fontWeight={900}
              component="div"
            >
              Application Processing Fee
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              close
            </Button>
          </Toolbar>
        </AppBar>
        <DialogContent>
          <PDFDownloadLink
            style={{ textDecoration: "none" }}
            document={<Challan />}
            fileName="Application Processing Fee"
          >
            {({ loading }) =>
              loading ? (
                "Loading..."
              ) : (
                <Button variant="contained">Download</Button>
              )
            }
          </PDFDownloadLink>

          <br />
          <br />

          <PDFViewer style={{ width: "100%", height: 870 }}>
            <Challan />
          </PDFViewer>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Instructions;
