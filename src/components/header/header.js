import React, { Fragment, Component } from 'react';

import HeaderStyle from './style';

class Header extends Component {
  handleChangeDash() {
    
  }

  render() {
    return (
      <Fragment>
        <HeaderStyle />
        <header>
          <div className="container">
            <div className="header__content">
              <div className="logo">
                <a href=" ">
                  <p>Gustavo</p>
                </a>
              </div>
              <div className="menu">
                <nav>
                  <ul>
                    <li className="menu__item">
                      <a href=" " className="menu__link">Home</a>
                    </li>
                    <li className="menu__item">
                      <a href=" " className="menu__link"  onClick={this.handleChangeDash } key={2}>Sobre</a>
                    </li>
                    <li className="menu__item">
                      <a href=" " className="menu__link">Formação</a>
                    </li>
                    <li className="menu__item">
                      <a href=" " className="menu__link">Portfólio</a>
                    </li>
                    <li className="menu__item">
                      <a href=" " className="menu__link">Contato</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Header;
