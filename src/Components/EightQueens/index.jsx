import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

import { toast } from "react-toastify";
import Goback from "../Utility/Goback";
import delay from "../Utility/delay.js";
import style from "./style.module.css";

let queenpic = require("../Assests/queen.png");

const Queens = () => {
  const [data, setdata] = useState([
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ]);
  const [isComplete, setisComplete] = useState(false);
  const [isSolving, setisSolving] = useState(false);
  useEffect(() => {}, []);
  const solveQueens = async (curBoard, row, high, low, col) => {
    if (row === 8 && col.size === 0) return true;
    await delay(400);
    let temp = Array.from(col);
    temp = temp.sort(() => Math.random() - 0.5);
    for (const i of temp) {
      let copy = [...curBoard];
      let lowValue = i + row;
      let highValue = row - i;
      if (low.has(lowValue) || high.has(highValue)) continue;
      copy[row][i] = 1;
      high.add(highValue);
      low.add(lowValue);
      col.delete(i);
      setdata(copy);
      let res = await solveQueens(copy, row + 1, high, low, col);
      if (res) return true;
      copy[row][i] = null;
      setdata(copy);
      high.delete(highValue);
      low.delete(lowValue);
      col.add(i);
    }
    if (col.size > 0) return false;

    return true;
  };

  const clickHandler = async () => {
    let start = new Date();
    let curBoard = [...data];
    setisSolving(true);
    await solveQueens(
      curBoard,
      0,
      new Set(),
      new Set(),
      new Set([0, 1, 2, 3, 4, 5, 6, 7])
    );
    setisSolving(false);
    setisComplete(true);
    toast.configure();
    toast(
      "😀 Success! Time Used:" +
        Math.floor(Math.abs(new Date() - start) / 1000) +
        "s"
    );
  };

  return (
    <div>
      <div className={style.header}>
        <h2> 8 Queens</h2>
        <Button
          onClick={clickHandler}
          className={isComplete ? "disabled" : " "}
        >
          {isComplete ? "Complete" : isSolving ? "Solving" : "Solve"}
        </Button>
      </div>
      <div>
        {data &&
          data.map((row, idx) => (
            <Row rowValue={row} index={idx} key={idx} style={style} />
          ))}
      </div>
      <Goback />
    </div>
  );
};

const Row = ({ rowValue, style, index }) => {
  return (
    <div className={style.row}>
      {rowValue.map((value, idx) => (
        <Cell value={value} key={idx} idx={(index % 2) + idx} style={style} />
      ))}
    </div>
  );
};

const Cell = ({ value, style, idx }) => {
  return (
    <div className={(idx % 2 === 0 ? style.cell_even : " ") + " " + style.cell}>
      <p className={style.cell_value}>
        {" "}
        {(value && <img className={style.queen} src={queenpic} alt="Q" />) ||
          ""}
      </p>
    </div>
  );
};

export default Queens;
