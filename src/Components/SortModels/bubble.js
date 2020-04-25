import delay from "../Utility/delay";
import swapNode from "../Utility/utility";
import style from "./style.module.css";

const bubble = async (nodes, setisComplete, setisSorting) => {
  setisSorting(true);

  let cur = [...nodes];
  let len = cur.length;
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

export default bubble;
