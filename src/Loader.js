import React from "react";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThreeCircles
        height="100"
        width="100"
        color="#01411C"
        visible={true}
        ariaLabel="Loader"
      />
    </div>
  );
};

export default Loader;
