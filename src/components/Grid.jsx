import React, { useState } from 'react';
import './styles.css';
const Grid = () => {
  const [grid, setGrid] = useState(createInitialGrid());

  const handleCellClick = (row, col) => {
    // Logic for handling cell click
  };

  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, cellIndex) => (
            <div
              key={cellIndex}
              className={`cell ${cell.isStart ? 'start' : ''} ${cell.isEnd ? 'end' : ''}`}
              onClick={() => handleCellClick(rowIndex, cellIndex)}
            >
              {/* Cell content */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const createInitialGrid = () => {
  // Initialize a grid with default values
  const grid = [];
  for (let row = 0; row < 20; row++) {
    const currentRow = [];
    for (let col = 0; col < 50; col++) {
      currentRow.push(createCell(col, row));
    }
    grid.push(currentRow);
  }
  return grid;
};

const createCell = (col, row) => {
  return {
    col,
    row,
    isStart: row === 10 && col === 5,
    isEnd: row === 10 && col === 45,
    isVisited: false,
    distance: Infinity,
  };
};

export default Grid;
