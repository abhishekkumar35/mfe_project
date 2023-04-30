import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (El) => {
  ReactDOM.render(<App />, El);
};

if (process.env.NODE_ENV === "development") {
  const El = document.querySelector("#_dev_marketing");
  if (El) {
    mount(El);
  }
}

export { mount };
