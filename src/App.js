import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Board from "./Components/Sudoku/Board.jsx";
import BubbleSort from "./Components/BubbleSort";
import Home from "./Components/Home.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/sudoku">
            <Board />
          </Route>
          <Route path="/bubble">
            <BubbleSort />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
