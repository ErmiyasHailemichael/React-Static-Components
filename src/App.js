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
    <div class="DASHBOAR"><Dashboard/></div>
    <div class="REVIEWS"><Reviews/></div>
    <div class="RATINGS"><Rating/></div>
    <div class="ANALYSIS"><Analysis/></div>
    <div class="VISITORS"><Visitors/></div>
    </div>
    
  );
}

export default App;
