import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';

function App() {
  return (
    <div className="App">
      <Header />

      {/* App Body */}
      <div className="app__body">
        {/* Sidebar left side */}
        <Sidebar className="content-15" />
        {/* Feed */}
        <Feed className="content-30" />
        {/* Widgets right side */}
      </div>

    </div>
  );
}

export default App;
