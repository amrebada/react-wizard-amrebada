import React from "react";

const Step = props => {
  const { index, active, onClick } = props;

  return (
    <div
      onClick={() => onClick(index)}
      style={active ? { ...StepStyle, ...StepActive } : { ...StepStyle }}
    >
      {index + 1}
      
    </div>
  );
};

const StepStyle = {
  width: 50,
  height: 50,
  border: "1px solid #dededf",
  borderRadius: 25,
  alignItems: "center",
  justifyContent: "center",
  color: "#dededf",
  display: "flex",
  cursor: "pointer"
};

const StepActive = {
  backgroundColor: "#69cb95",
  color: "white",
  border: "1px solid #fff0"
};

export default Step;
