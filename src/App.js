import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import header from "./img/blood-297828_640.png";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div>Blood Bank</div>
        </div>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light red">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </Router>
  );
}

export default App;
