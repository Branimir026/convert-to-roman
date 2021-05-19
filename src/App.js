import React from "react";
import "./App.css";
import Converter from "./Converter";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="app container">
      <div className="header">
        <h1>Convert To Roman</h1>
        <h3>Convert any number from 1 to 3999 to a roman numeral.</h3>
      </div>
      <Converter />
    </div>
  );
}

export default App;
