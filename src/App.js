import React, { Fragment, Component } from 'react';

import About from './components/home/about';
import Scholl from './components/home/scholl';
import Portfolio from './components/home/portfolio';

import GlobalStyles from './components/home/style';

class App extends Component {
  render() {
    return (
      <Fragment>
          <GlobalStyles />
          <About />
          <Scholl />
          <Portfolio />
      </Fragment>
    );
  }
}

export default App;
