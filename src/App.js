import React, { Component } from "react";
import Books from "./Books";
import Houses from "./Houses";
class App extends Component {
  render() {
    return (
      <div>
        <Books />
        <Houses />
      </div>
    );
  }
}
export default App;
