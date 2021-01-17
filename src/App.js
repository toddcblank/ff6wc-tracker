import React from 'react';
import './App.css';
import './tracker.css';
import TrackerItemGrouping from './components/trackerItemGrouping'
import trackerJson from './checks'
import CountingTrackerItem from './components/countingTrackerItem';
import CharacterCount from './components/characterCount'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <h2>Super Metroid: Keysanity</h2>
        <div className="groups">
          {
            trackerJson.map((group, i) =>
              <TrackerItemGrouping
                groupIcon={group.groupIcon}
                groupedItems={group.groupedItems}
              />
            )
          }
          {/* <CharacterCount 
            itemIcon="./icons/magicite.gif"
            itemName="Characters Collected"/>
          <CountingTrackerItem
            itemIcon="./icons/magicite.gif"
            itemName="Espers Collected"
          /> */}
        </div>
      </header>     
    </div>
  );
}

export default App;
