import React, { useRef, useState, useEffect } from "react";

import Goback from "./../Utility/Goback.jsx";
import Bar from "./Bar";
import style from "./style.module.css";
import Loader from "../Utility/Loader.jsx";

const BubbleSort = ({ title, sort }) => {
  const containerRef = useRef(null);
  const [list, setlist] = useState(null);
  const [isChange, setisChange] = useState(false);
  const [isSorting, setisSorting] = useState(false);
  const [isComplete, setisComplete] = useState(false);
  useEffect(() => {
    setisComplete(false);
    setisSorting(false);
    setlist(randomArray(10, 100));
  }, [isChange]);

  function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function () {
      return Math.floor(Math.random() * max) + 1;
    });
  }
  const onClick = () => {
    let temp = [...containerRef.current.childNodes];
    temp = temp.sort((a, b) => parseInt(a.style.left) - parseInt(b.style.left));
    sort(temp, setisComplete, setisSorting);
  };

  return (
    <div className={style.main}>
      <div ref={containerRef} className={style.container}>
        {list &&
          list.map((value, idx) => <Bar value={value} idx={idx} key={idx} />)}
      </div>
      <div className={style.func}>
        <span>{title}</span>
        <div>
          <button
            className={isSorting ? "disabled" : ""}
            onClick={() => setisChange(!isChange)}
          >
            {" "}
            New Array{" "}
          </button>
        </div>
        {isSorting ? (
          <Loader />
        ) : (
          <div>
            <button
              className={isSorting ? "disabled" : isComplete ? "disabled" : " "}
              onClick={onClick}
            >
              {isComplete ? "Complete" : "Sort"}
            </button>
          </div>
        )}
      </div>
      <Goback />
    </div>
  );
};

export default BubbleSort;
