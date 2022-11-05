import React, { useState } from "react";
import { Container, Paper, Step, StepLabel, Stepper } from "@mui/material";

const CreateAccount = () => {
  const [activeStep, setActiveStep] = useState(0);

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
              <StepLabel>Invite Your Friend</StepLabel>
            </Step>
          </Stepper>

          {activeStep === 0 && <></>}
        </Paper>
      </Container>
    </div>
  );
};

export default CreateAccount;
