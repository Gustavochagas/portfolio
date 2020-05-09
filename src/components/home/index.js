import React, { Component } from 'react';

import './style.sass';

import Illustration from '../../assets/illustration.svg';
import BlockText from '../../commons/block-text';

class Home extends Component {
  render() {
    const style = [
      { type: 'left', class: '' },
      { type: 'right', class: 'right' },
      { type: 'no-image', class: 'no-image' },
    ];

    return (
      <>
        <div className={"home " + style[0].class}>
          <div className="home-image">
            <img src={Illustration} title="Ilustration" alt="Illustration" />
          </div>
          <BlockText
            title="Frontend Developer"
            text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            actionTitle="Contact"
            direction="right"
          />
        </div>
      </>
    )
  }
}

export default Home;
