import React, { useRef, useState, useEffect } from "react";

import Goback from "./../Utility/Goback.jsx";
import Bar from "./Bar";
import style from "./style.module.css";
import swapNode from "./../Utility/utility";
import delay from "./../Utility/delay";
import Loader from "../Utility/Loader.jsx";

const BubbleSort = () => {
  const containerRef = useRef(null);
  const [list, setlist] = useState(null);
  const [isChange, setisChange] = useState(false);
  const [isSorting, setisSorting] = useState(false);
  const [isComplete, setisComplete] = useState(false);
  useEffect(() => {
    setisComplete(false);
    setisSorting(false);
    setlist(randomArray(10, 120));
  }, [isChange]);

  function randomArray(length, max) {
    return Array.apply(null, Array(length)).map(function () {
      return Math.floor(Math.random() * max) + 1;
    });
  }

  const sort = async () => {
    setisSorting(true);
    let cur = [...containerRef.current.childNodes];
    cur.sort((item) => item.style.left);
    let len = list.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len - 1; i++) {
        let a = cur[i].dataset.value;
        let b = cur[i + 1].dataset.value;
        cur[i].classList.toggle(style.active);
        cur[i + 1].classList.toggle(style.active);
        if (parseInt(a) > parseInt(b)) {
          let temp = cur[i];
          cur[i] = cur[i + 1];
          cur[i + 1] = temp;

          swapNode(cur[i], cur[i + 1]);

          swapped = true;
        }
        await delay(500);
        cur[i].classList.toggle(style.active);
        cur[i + 1].classList.toggle(style.active);
      }
    } while (swapped);
    setisSorting(false);
    setisComplete(true);
  };

  return (
    <div className={style.main}>
      <div ref={containerRef} className={style.container}>
        {list &&
          list.map((value, idx) => <Bar value={value} idx={idx} key={idx} />)}
      </div>
      <div className={style.func}>
        <span>Bubble Sort</span>
        <button
          className={isSorting ? "disabled" : ""}
          onClick={() => window.location.reload()}
        >
          {" "}
          New Array{" "}
        </button>
        <button
          className={isSorting ? "disabled" : isComplete ? "disabled" : " "}
          onClick={() => sort()}
        >
          {isSorting ? <Loader /> : isComplete ? "Complete" : "Sort"}
        </button>
      </div>
      <Goback />
    </div>
  );
};

export default BubbleSort;
