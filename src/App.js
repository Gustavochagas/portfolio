import React, { Fragment, Component } from 'react';

import LeftPart from './components/home/leftPart';
import MiddlePart from './components/home/middlePart';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="person">
            <LeftPart />
            <MiddlePart />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
