import React, { useRef, useState, useEffect } from "react";

import Goback from "./../Utility/Goback.jsx";
import Bar from "./Bar";
import style from "./style.module.css";
import Loader from "../Utility/Loader.jsx";

const BubbleSort = ({ title, sort }) => {
  const containerRef = useRef(null);
  const [list, setlist] = useState(null);
  const [isSorting, setisSorting] = useState(false);
  const [isComplete, setisComplete] = useState(false);
  useEffect(() => {
    setisComplete(false);
    setisSorting(false);
    setlist(randomArray(10, 100));
  }, []);

  function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function () {
      return Math.floor(Math.random() * max) + 1;
    });
  }
  const onClick = () => {
    sort(containerRef.current.childNodes, setisComplete, setisSorting);
  };

  return (
    <div className={style.main}>
      <div ref={containerRef} className={style.container}>
        {list &&
          list.map((value, idx) => <Bar value={value} idx={idx} key={idx} />)}
      </div>
      <div className={style.func}>
        <span>{title}</span>
        <button
          className={isSorting ? "disabled" : ""}
          onClick={() => window.location.reload(false)}
        >
          {" "}
          New Array{" "}
        </button>
        <button
          className={isSorting ? "disabled" : isComplete ? "disabled" : " "}
          onClick={onClick}
        >
          {isSorting ? <Loader /> : isComplete ? "Complete" : "Sort"}
        </button>
      </div>
      <Goback />
    </div>
  );
};

export default BubbleSort;
