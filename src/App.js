import React, { Component } from 'react';

import Header from './components/header';

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
          <h3>Oi</h3>
        </div>
      </div>
    );
  }
}

export default App;
