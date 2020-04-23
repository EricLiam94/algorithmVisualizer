import React from "react";
import style from "./style.module.css";

const Bar = ({ value, idx }) => {
  let left = idx * 10;
  return (
    <div
      className={style.bar}
      style={{ height: value * 3, left: left + "%" }}
      data-value={value}
    >
      <span> {value}</span>
    </div>
  );
};

export default Bar;
