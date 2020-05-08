import React, { Component } from 'react';

import Header from './components/header';
import Home from './components/home';

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
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
