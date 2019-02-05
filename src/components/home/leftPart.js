import React, { Fragment, Component } from 'react';

import LeftPartStyles from './style';

import profilePicture from '../../assets/images/profile.jpg';

class LeftPart extends Component {
  render() {
    return (
      <Fragment>
          <LeftPartStyles />
          <div className="leftpart">
            <div className="leftpart__top">
                <div className="picture">
                    <img src={profilePicture} alt="Minha Foto"/>
                </div>
                <h2>Gustavo Chagas</h2>
                <p>Desenvolvedor de Front-End</p>
                <span>Americana, São Paulo, Brasil</span>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default LeftPart;
