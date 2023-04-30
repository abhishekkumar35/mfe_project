import React from "react";
import MarketingAppComponent from "./components/MarketingAppComponent";
import Header from "./components/Header";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingAppComponent />
      </div>
    </BrowserRouter>
  );
};
