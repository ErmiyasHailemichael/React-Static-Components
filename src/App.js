import React from 'react';
import Analysis from './Components/Analysis';
import Dashboard from './Components/Dashboard';
import Rating from './Components/Rating'
import Reviews from './Components/Reviews'
import Visitors from './Components/Visitors'

// style
//make sure that you use className instead of class
//yay! you used grid-template-areas
import './index.css'
function App() {
  return (
    
    <div className="app-grid">
    <div className="DASHBOAR"><Dashboard/></div>
    <div className="REVIEWS"><Reviews/></div>
    <div className="RATINGS"><Rating/></div>
    <div className="ANALYSIS"><Analysis/></div>
    <div className="VISITORS"><Visitors/></div>
    </div>
    
  );
}

export default App;
