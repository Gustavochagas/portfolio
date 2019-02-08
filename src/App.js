import React, { Fragment, Component } from 'react';

import Header from './components/header/header';
import About from './components/home/about';
import Scholl from './components/home/scholl';
import Portfolio from './components/home/portfolio';

import GlobalStyles from './components/home/style';

class App extends Component {
  render() {
    return (
      <Fragment>
          <GlobalStyles />
          <Header />
          <About />
          <Scholl />
          <Portfolio />
      </Fragment>
    );
  }
}

export default App;
