import React, { Component } from 'react';

import './style.sass';

import Illustration from '../../assets/illustration.svg';

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
          <div className="home-content">
            <h1 className="title">Frontend developer</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="button">Contact</button>
          </div>
        </div>
      </>
    )
  }
}

export default Home;
