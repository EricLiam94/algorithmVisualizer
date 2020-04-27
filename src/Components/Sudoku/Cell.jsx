import React from "react";

const Cell = ({ value, style }) => {
  return (
    <div className={style.cell}>
      <p className={style.cell_value}> {value || ""}</p>
    </div>
  );
};

export default Cell;
