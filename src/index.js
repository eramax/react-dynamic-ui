import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Layout";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

function App() {
  return <Layout />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
