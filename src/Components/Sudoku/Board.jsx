import React, { useState, useEffect, useRef } from "react";
import Toast from "../Utility/Toast";
import style from "./sudoku.module.css";
import Cell from "./Cell";
import delay from "./../Utility/delay.js";
import Goback from "../Utility/Goback";
import Loader from "../Utility/Loader";
const Board = () => {
  const url = "https://sugoku.herokuapp.com/board?difficulty=easy";
  const [count, setcount] = useState(0);
  const [board, setboard] = useState([]);
  const [loading, setloading] = useState(false);
  const [changeBoard, setchangeBoard] = useState(false);
  const [isSolving, setisSolving] = useState(false);
  const [complete, setcomplete] = useState(false);
  const [speed, setspeed] = useState(5);
  const boardRef = useRef(null);
  useEffect(() => {
    setcount(0);
    setcomplete(false);
    setboard([]);
    setloading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setboard(data.board);
        setloading(false);
      });
  }, [changeBoard]);

  const solveBoard = async (curboard) => {
    for (let i = 0; i < 9; i++)
      for (let j = 0; j < 9; j++) {
        if (curboard[i][j] !== 0) continue;
        let options = await validOption(curboard, i, j);
        setcount((c) => c + 1);
        if (options.size === 0) return false;
        options = Array.from(options);
        for (const value of options) {
          try {
            let copy = [...curboard];
            copy[i][j] = value;
            setboard(copy);
            let res = await solveBoard(curboard);
            if (res) return true;
            copy[i][j] = 0;
            setboard(copy);
          } catch (error) {
            console.log(error);
          }
        }

        return false;
      }

    return curboard;
  };
  const validOption = async (curBoard, row, col) => {
    let currentNode = boardRef.current.childNodes[row].childNodes[col];
    currentNode.classList.add(style.main);
    let cache = [];
    let options = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    for (let i = 0; i < 9; i++) {
      options.delete(curBoard[row][i]);
      if (i === col) continue;
      cache.push(getChild(row, i));
    }
    for (let i = 0; i < 9; i++) {
      options.delete(curBoard[i][col]);
      if (i === row) continue;
      cache.push(getChild(i, col));
    }
    const m = 3 * Math.floor(row / 3);
    const n = 3 * Math.floor(col / 3);
    for (let i = m; i < m + 3; i++)
      for (let j = n; j < n + 3; j++) {
        if (i === row && j === col) continue;
        options.delete(curBoard[i][j]);
        cache.push(getChild(i, j));
      }
    await delay(speed);
    cache.map((i) => i.classList.remove(style.mystyle));
    return options;
  };

  const getChild = (x, y) => {
    let node = boardRef.current.childNodes[x].childNodes[y];
    node.classList.add(style.mystyle);
    return node;
  };

  const clickSolving = async () => {
    let temp = [...board];
    setisSolving(true);
    await solveBoard(temp);
    setisSolving(false);
    setcomplete(true);
  };

  const speedOnclick = (e) => {
    setspeed(e.target.value);
  };

  return (
    <div>
      <Goback />
      {!loading && (
        <div>
          {" "}
          <p style={{ fontSize: "25px", margin: "5px" }}> Sudoku </p>
          <div className={style.header}>
            {board.length > 0 && (
              <button
                onClick={() => setchangeBoard(!changeBoard)}
                className={isSolving ? "disabled" : ""}
              >
                generate board
              </button>
            )}
            <button
              onClick={clickSolving}
              className={complete ? "disabled" : ""}
            >
              {complete ? "Complete" : isSolving ? "solving" : "solve"}
            </button>
            <div>
              Speed{" "}
              <select id="speed" onChange={speedOnclick} value={speed}>
                <option value={5}>x4</option>
                <option value={10}>x3</option>
                <option value={12}>x2</option>
                <option value={20}>x1</option>
                <option value={0}> x0 </option>
              </select>
            </div>
          </div>
        </div>
      )}
      {loading && <Loader />}
      <div className={style.board} ref={boardRef}>
        {board && board.map((row, idx) => <Row rowValue={row} key={idx} />)}
      </div>
      <Toast show={complete} title="Total attemps" content={count} />
    </div>
  );
};

const Row = ({ rowValue }) => {
  return (
    <div className={style.row}>
      {rowValue.map((value, idx) => (
        <Cell value={value} key={idx} />
      ))}
    </div>
  );
};

export default Board;
