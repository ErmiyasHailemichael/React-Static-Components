import React from 'react';
import Analysis from './Components/Analysis';
import Dashboard from './Components/Dashboard';
import Rating from './Components/Rating'
import Reviews from './Components/Reviews'
import Visitors from './Components/Visitors'

// style
import './index.css'
function App() {
  return (
    <div className="app-grid">
      <Dashboard />
      <Reviews/>
      <Rating/>
      <Analysis />
      <Visitors/>
    </div>
  );
}

export default App;
