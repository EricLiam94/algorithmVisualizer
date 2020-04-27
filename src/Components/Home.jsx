import React from "react";
import { Link } from "react-router-dom";

const video = require("./Assests/galaxy.mp4");
const staticpic = require("./Assests/staticpic.png");
const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${staticpic})` }}>
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
          <div className="card">
            <Link to="/8queens">8 Queens</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);
