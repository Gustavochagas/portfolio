import React, { Fragment, Component } from 'react';

import LeftPartStyles from './style';

import profilePicture from '../../assets/images/profile.jpg';

import 'font-awesome/css/font-awesome.css';

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
                <a href="https://github.com/Gustavochagas" target="_blank"  rel="noopener noreferrer" className="leftpart__links">
                  <i className="fa fa-github"></i>
                </a>
                <a href="mailto:gustavochagasb@gmail.com" target="_blank"  rel="noopener noreferrer" className="leftpart__links">
                  <i className="fa fa-envelope"></i>
                </a>
                <a href="https://web.whatsapp.com/send?phone=5519982537760&amp" target="_blank"  rel="noopener noreferrer" className="leftpart__links">
                  <i className="fa fa-whatsapp"></i>
                </a>
                <a href="https://www.linkedin.com/in/gustavo-chagas-578706107/" target="_blank"  rel="noopener noreferrer" className="leftpart__links">
                  <i className="fa fa-linkedin"></i>
                </a>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default LeftPart;
