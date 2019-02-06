import React, { Fragment, Component } from 'react';


class Scholl extends Component {
  render() {
    return (
      <Fragment>
        <div className="formacao">
          <div className="container">
            <h2>Formação</h2>
            <div className="formation">
              <i className="fa fa-graduation-cap"></i>
            </div>
            <p className="faculdade">Centro Universitário Salesiano de São Paulo</p>
            <p className="curso">Bacharelado em Sistemas de Informação, Gestão de Sistemas de Informação · (2014 - 2017)</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Scholl;
