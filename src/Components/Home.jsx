import React from "react";
import { Link } from "react-router-dom";

const video = require("./Assests/galaxy.mp4");

const Home = () => {
  return (
    <div className="home">
      <div>
        <video className="videobg" autoPlay={true} loop={true} muted={true}>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="category">
        <h2> Welcome to Algorithm Visualizer</h2>

        <div className="card_container">
          <div className="card">
            <Link to="/sudoku">Sudoku</Link>
          </div>
          <div className="card">
            <Link to="/bubble">Bubble Sort</Link>
          </div>
          <div className="card">
            <Link to="/selection">Selection Sort</Link>
          </div>
          <div className="card">
            <Link to="/quick">Quick Sort</Link>
          </div>
          <div className="card">
            <Link to="/insertion">Insertion Sort</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
