import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './tracker.css';
import TrackerItemGrouping from './components/trackerItemGrouping'
import trackerJson from './checks'
import CountingTrackerItem from './components/countingTrackerItem';
import CharacterCount from './components/characterCount'

function App() {

  const [numCharacters, setCharactersFound] = useState(0)

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
          <CharacterCount 
            itemIcon="./icons/magicite.gif"
            itemName="Characters Collected"/>
          <CountingTrackerItem
            itemIcon="./icons/magicite.gif"
            itemName="Espers Collected"
          />
        </div>
      </header>
      <footer>
        <h3>Tracker written by Rumbleminze</h3>
        <h3>Access the Final Fantasy VI: Worlds Collide randomizer at <a href="http://ff6wc.com">http://ff6wc.com</a></h3>
        <h3>Join the FF6WC Discord: <a href="https://discord.gg/5MPeng5">https://discord.gg/5MPeng5</a></h3>
      </footer>
    </div>
  );
}

export default App;
