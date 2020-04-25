import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Board from "./Components/Sudoku/Board.jsx";
import Sort from "./Components/Sort";
import Home from "./Components/Home.jsx";

import bubble from "./Components/SortModels/bubble";
import selection from "./Components/SortModels/selection";
import quick from "./Components/SortModels/quick";
import insertion from "./Components/SortModels/insertion";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/sudoku">
            <Board />
          </Route>
          <Route path="/bubble">
            <Sort title="Bubble Sort" sort={bubble} />
          </Route>
          <Route path="/selection">
            <Sort title="Selection Sort" sort={selection} />
          </Route>
          <Route path="/quick">
            <Sort title="Quick Sort" sort={quick} />
          </Route>
          <Route path="/insertion">
            <Sort title="Insertion Sort" sort={insertion} />
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
