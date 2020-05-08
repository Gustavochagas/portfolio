import React, { Component } from 'react';

import Header from './components/header';

class App extends Component {
  render() {
    return (
      <div className="all">
        <Header />
        <div className="all-content">
          <h3>Oi</h3>
        </div>
      </div>
    );
  }
}

export default App;
