import React, { useState, useEffect } from 'react';
import './styles.css';
import { bubbleSort } from '../algorithms/bubbleSort';
import { quickSort } from '../algorithms/quickSort';
import { mergeSort } from '../algorithms/mergeSort';

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    const newArray = [];
    for (let i = 0; i < 100; i++) {
      newArray.push(randomIntFromInterval(5, 730));
    }
    setArray(newArray);
  };

  const animateSort = (animations) => {
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const [barOneIdx, barTwoIdxOrValue, type] = animations[i];
      if (type === 'compare' || type === 'revert') {
        const color = type === 'compare' ? 'red' : 'turquoise';
        setTimeout(() => {
          arrayBars[barOneIdx].style.backgroundColor = color;
          arrayBars[barTwoIdxOrValue].style.backgroundColor = color;
        }, i * 10);
      } else if (type === 'swap') {
        setTimeout(() => {
          const barStyle = arrayBars[barOneIdx].style;
          barStyle.height = `${barTwoIdxOrValue}px`;
        }, i * 10);
      }
    }
  };

  const bubbleSortHandler = () => {
    const animations = bubbleSort(array.slice());
    animateSort(animations);
  };

  const quickSortHandler = () => {
    const animations = quickSort(array.slice());
    animateSort(animations);
  };

  const mergeSortHandler = () => {
    const animations = mergeSort(array.slice());
    animateSort(animations);
  };

  return (
    <div>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{ height: `${value}px` }}
          ></div>
        ))}
      </div>
      <button onClick={resetArray}>Generate New Array</button>
      <button onClick={bubbleSortHandler}>Bubble Sort</button>
      <button onClick={quickSortHandler}>Quick Sort</button>
      <button onClick={mergeSortHandler}>Merge Sort</button>
    </div>
  );
};

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default SortingVisualizer;
