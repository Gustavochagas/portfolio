import React, { Fragment, Component } from 'react';

import Header from './components/header/header';
import Banner from './components/home/banner';
import About from './components/home/about';
import Scholl from './components/home/scholl';
import Portfolio from './components/home/portfolio';
import Footer from './components/footer/index';

import GlobalStyles from './components/home/style';

class App extends Component {
  render() {
    return (
      <Fragment>
          <GlobalStyles />
          <Header />
          <Banner />
          <About />
          <Scholl />
          <Portfolio />
          <Footer />
      </Fragment>
    );
  }
}

export default App;
