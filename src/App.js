import React, { Component } from 'react';
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';

const headerPosition = [
  { key: 'left', class: '' },
  { key: 'right', class: 'header-right'} ,
  { key: 'top', class: 'header-top' },
  { key: 'bottom', class: 'header-bottom' },
];

class App extends Component {
  render() {
    return (
      <div className={"all " + headerPosition[0].class}>
        <Header />
        <div className="all-content">
        <DndProvider backend={Backend}>
          <Home />
          <About />
          <Skills />
        </DndProvider>
        </div>
      </div>
    );
  }
}

export default App;
