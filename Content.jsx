import React from "react";
import { connect } from "react-redux";

const Content = props => {
  return (
    <div>
      <p> <strong>Content of {props.index + 1}</strong></p>
      <p>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " + (props.index > 1 &&"of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu")}</p>
      <button onClick={() => props.dispatch({ type: "NEXT_STEP" })} >
        {props.index === props.max - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
};


const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(Content);
