import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";

function App() {
  return (
    <Router>
      <HashRouter>
        <NavBar />
      </HashRouter>
    </Router>
  );
}

export default App;
