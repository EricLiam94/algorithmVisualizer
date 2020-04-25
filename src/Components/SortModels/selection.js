import delay from "../Utility/delay";
import swapNode from "../Utility/utility";
import style from "./style.module.css";

const selection = async (nodes, setisComplete, setisSorting) => {
  setisSorting(true);
  let cur = [...nodes];
  let len = nodes.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    cur[i].classList.toggle(style.active);
    for (let j = i + 1; j < len; j++) {
      cur[min].classList.toggle(style.min);
      cur[j].classList.toggle(style.active);
      await delay(500);
      cur[min].classList.toggle(style.min);
      cur[j].classList.toggle(style.active);
      if (parseInt(cur[min].dataset.value) > parseInt(cur[j].dataset.value)) {
        min = j;
      }
    }
    cur[i].classList.toggle(style.active);
    if (min !== i) {
      let tmp = cur[i];
      cur[i] = cur[min];
      cur[min] = tmp;
      swapNode(cur[min], cur[i]);
    }
  }
  setisSorting(false);
  setisComplete(true);
};

export default selection;
