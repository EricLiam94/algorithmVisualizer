import delay from "../Utility/delay";
import swapNode, { getValue } from "../Utility/utility";
import style from "./style.module.css";

const insertion = async (nodes, setiscompete, setissolving) => {
  setissolving(true);
  let cur = [...nodes];
  let length = cur.length;
  for (let i = 1; i < length; i++) {
    let pivot = cur[i];

    let j = i - 1;
    while (j >= 0 && getValue(cur[j]) > getValue(pivot)) {
      cur[j + 1].classList.toggle(style.active);
      cur[j].classList.toggle(style.active);
      let temp = cur[j + 1];
      cur[j + 1] = cur[j];
      cur[j] = temp;
      swapNode(cur[j + 1], cur[j]);
      await delay(600);
      cur[j + 1].classList.toggle(style.active);
      cur[j].classList.toggle(style.active);
      j = j - 1;
    }
  }
  setiscompete(true);
  setissolving(false);
};

export default insertion;
