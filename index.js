import React, { Component } from "react";
import { render } from "react-dom";
import Content from "./Content";
import Steps from "./Steps";
import "./style.css";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer";

class App extends Component {
  render() {
    return (
      <div
        style={{
          textAlign: "center",
          background: "#f5f5fa",
          minHeight: "50vh"
        }}
      >
        <h1> Title of wizard </h1>
        <Steps />
        <Content />
      </div>
    );
  }
}

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
