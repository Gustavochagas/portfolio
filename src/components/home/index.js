import React, { Component } from 'react';

import './style.sass';

import Illustration from '../../assets/illustration.svg';

class Home extends Component {
  render() {
    return (
      <>
        <div className="home">
          <div className="home-image">
            <img src={Illustration} title="Ilustration" alt="Illustration" />
          </div>
          <div className="home-content">
            <h1>Frontend developer</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button>Contact</button>
          </div>
        </div>
      </>
    )
  }
}

export default Home;
