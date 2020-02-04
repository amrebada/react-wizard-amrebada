import React from "react";
import { connect } from "react-redux";
import Step from "./Step";

const Steps = props => {
  const allsteps = [];
  for (let i = 0; i < props.max; i++) {
    allsteps.push(i);
  }

  const goto = i => {
    props.dispatch({ type: "GOTO", index: i });
  };

  return (
    <div style={Container}>
      {allsteps.map((e, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <div
              style={
                props.index >= i
                  ? { ...horizontalLineStyle, background: "#69cb95" }
                  : horizontalLineStyle
              }
            />
          )}
          <Step onClick={goto} active={props.index >= i} index={i} />
        </React.Fragment>
      ))}
    </div>
  );
};

const Container = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  fontFamily: "Roboto,sans-serif"
};

const horizontalLineStyle = {
  width: 30,
  height: 1,
  background: "#dededf"
};

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Steps);
