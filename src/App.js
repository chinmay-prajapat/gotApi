import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Books from "./Books";
import Houses from "./Houses";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Books /> */}
        <Houses />
      </div>
    );
  }
}
export default App;
