// src/App.jsx
import React from 'react';
import SortingVisualizer from './components/SortingVisualizer';
import Grid from './components/Grid';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sorting Visualizer</h1>
      <SortingVisualizer />
    </div>
  );
}

export default App;