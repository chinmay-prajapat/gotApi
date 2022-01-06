import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Books from "./Books";
import Houses from "./Houses";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={Books} />
            <Route path="/houses" exact component={Houses} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
