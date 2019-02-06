import React, { Fragment, Component } from 'react';

import 'font-awesome/css/font-awesome.css';

import About from './middlepart/about';
import Professional from './middlepart/professional';
import Scholl from './middlepart/scholl';
import Portfolio from './middlepart/portfolio';

class MiddlePart extends Component {
  render() {
    return (
      <Fragment>
          <div className="middlepart">
            <About />
            <Professional />
            <Scholl />
            <Portfolio />
          </div>
      </Fragment>
    );
  }
}

export default MiddlePart;
