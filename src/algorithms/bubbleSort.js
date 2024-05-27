// src/algorithms/bubbleSort.js
export function bubbleSort(array) {
    const animations = [];
    const auxiliaryArray = array.slice();
    const n = auxiliaryArray.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        animations.push([j, j + 1, 'compare']);
        if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
          animations.push([j, auxiliaryArray[j + 1], 'swap']);
          animations.push([j + 1, auxiliaryArray[j], 'swap']);
          swap(auxiliaryArray, j, j + 1);
        }
      }
    }
    return animations;
  }
  
  function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  