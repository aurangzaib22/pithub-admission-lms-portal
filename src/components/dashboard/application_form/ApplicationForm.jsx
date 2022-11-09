import React, { useState } from "react";
import { Container } from "@mui/system";
import {
  Box,
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonalInformation from "./personal_information/PersonalInformation";
import ContactInformation from "./contact_information/ContactInformation";
import NationalityAndResidenceInfo from "./nationality_and_residence_info/NationalityAndResidenceInfo";
import Academics from "./academics/Academics";
import Undertaking from "./undertaking/Undertaking";

const ApplicationForm = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const navigate = useNavigate();

  return (
    <div style={{ margin: "15px" }}>
      <Container
        className="application-form"
        component={Paper}
        elevation={10}
        sx={{ p: 3 }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          <Step>
            <StepLabel>Personal Information</StepLabel>
            <StepContent>
              <PersonalInformation />

              <Box sx={{ my: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continue
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>

          <Step>
            <StepLabel>Contact Information</StepLabel>
            <StepContent>
              <ContactInformation />

              <Box sx={{ my: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continue
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>

          <Step>
            <StepLabel>Nationality &amp; Residence Information</StepLabel>
            <StepContent>
              <NationalityAndResidenceInfo />

              <Box sx={{ my: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continue
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>

          <Step>
            <StepLabel>Academics</StepLabel>
            <StepContent>
              <Academics />

              <Box sx={{ my: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continue
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>

          <Step>
            <StepLabel
              optional={
                activeStep === 4 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              Undertaking
            </StepLabel>
            <StepContent>
              <Undertaking />

              <Box sx={{ my: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={() => navigate("/dashboard/home")}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Submit My Application
                  </Button>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        </Stepper>
      </Container>
    </div>
  );
};

export default ApplicationForm;
