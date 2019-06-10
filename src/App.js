import React, { Component } from 'react';
import './App.css';
import timelineData from './data/timeline.json';
import eventData from './data/timeline.json';
import Timeline from './components/Timeline';
import TimelineEvent from './components/TimelineEvent';


// const fs = require('fs');

// let rawdata = fs.readFileSync('data/timeline.json');
// let events = JSON.parse(rawdata);
// console.log(events[0]);
// const events = JSON.parse

console.log(eventData.events)
class App extends Component {
  render() {
    console.log(timelineData);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
          <Timeline events={eventData.events} />
        </main>
      </div>
    );
  }
}

export default App;
