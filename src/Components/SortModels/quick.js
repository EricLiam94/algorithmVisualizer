import delay from "../Utility/delay";
import swapNode, { getValue } from "../Utility/utility";
import style from "./style.module.css";

function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
  swapNode(items[leftIndex], items[rightIndex]);
}
const partition = async (items, left, right) => {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
  pivot.classList.toggle(style.active);

  while (i <= j) {
    while (getValue(items[i]) < getValue(pivot)) {
      items[i].classList.toggle(style.min);
      items[j].classList.toggle(style.min);
      await delay(1000);
      items[i].classList.toggle(style.min);
      items[j].classList.toggle(style.min);
      i++;
    }
    while (getValue(items[j]) > getValue(pivot)) {
      items[i].classList.toggle(style.min);
      items[j].classList.toggle(style.min);
      await delay(1000);
      items[i].classList.toggle(style.min);
      items[j].classList.toggle(style.min);
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      await delay(1000); //sawpping two elements
      i++;
      j--;
    }
  }
  pivot.classList.toggle(style.active);
  return i;
};

const quickSort = async (items, left, right) => {
  var index;
  if (items.length > 1) {
    index = await partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      await quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      await quickSort(items, index, right);
    }
  }
};

const quickSortModel = async (nodes, setiscomplete, setissolving) => {
  let cur = [...nodes];
  setissolving(true);
  await quickSort(cur, 0, cur.length - 1);
  setissolving(false);
  setiscomplete(true);
};

export default quickSortModel;
