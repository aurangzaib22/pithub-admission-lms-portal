import React, { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import English from "./english_undertaking/EnglishUndertaking";
import Urdu from "./urdu_undertaking/UrduUndertaking";

const Undertaking = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs value={value} variant="fullWidth" onChange={handleChange}>
        <Tab label="English" />
        <Tab label="Urdu" />
      </Tabs>

      <br />

      {value === 0 && <English />}
      {value === 1 && <Urdu />}
    </>
  );
};

export default Undertaking;
