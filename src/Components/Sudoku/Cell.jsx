import React from "react";
import style from "./sudoku.module.css";

const Cell = ({ value }) => {
  return (
    <div className={style.cell}>
      <p className={style.cell_value}> {value || ""}</p>
    </div>
  );
};

export default Cell;
