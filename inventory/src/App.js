import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router, HashRouter } from "react-router-dom";

function App() {
  return (
    <Router>
      <HashRouter>
        <NavBar />
        <footer>
          <h1>Footer</h1>
        </footer>
      </HashRouter>
    </Router>
  );
}

export default App;
