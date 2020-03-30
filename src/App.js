import React from 'react';
import logo from './logo.svg';
import './App.css';
import './tracker.css';
import TrackerItemGrouping from './components/trackerItemGrouping'
import trackerJson from './checks'
import CountingTrackerItem from './components/countingTrackerItem';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Final Fantasy 6: Worlds Collide Tracker</h2>
        <div className="groups">
       {
         trackerJson.map((group, i) => 
          <TrackerItemGrouping 
          groupIcon={group.groupIcon}
          groupedItems={group.groupedItems}
        />  
         )
         }
         <CountingTrackerItem 
          itemIcon="./icons/magicite.gif"
          itemName="Espers Collected"
         />       
       </div>
      </header>
    </div>
  );
}

export default App;
