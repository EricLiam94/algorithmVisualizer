import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <h2> Welcome to Algorithm Visualizer</h2>

      <div className="card_container">
        <div className="card">
          <Link to="/sudoku">Sudoku</Link>
        </div>
        <div className="card">
          <Link to="/bubble">Bubble Sort</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
