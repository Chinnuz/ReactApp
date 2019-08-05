import React from "react";
import ReactDOM from "react-dom";

import Calculator from "./components/Calculator";
import "./styles.css";

function App() {
  return <Calculator />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
