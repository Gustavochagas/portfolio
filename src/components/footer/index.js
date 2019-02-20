import React, { Fragment, Component } from 'react';

import FooterStyles from './style';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <FooterStyles />
        <footer>
          <div className="container">
            <p>Desenvolvido por Gustavo</p>
          </div>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;
