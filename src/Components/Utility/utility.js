const swapNode = (a, b) => {
  let temp = a.style.left;
  a.style.left = b.style.left;
  b.style.left = temp;
};

export const getValue = (node) => {
  return parseInt(node.dataset.value);
};

export default swapNode;
