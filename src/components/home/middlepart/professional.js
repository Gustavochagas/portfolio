import React, { Fragment, Component } from 'react';

import 'font-awesome/css/font-awesome.css';


class Professional extends Component {
  render() {
    return (
      <Fragment>
        <div className="item">
          <div>
            <h2>Experiência Profissional</h2>
            <div className="works">
              <span className="date"><i className="fa fa-calendar"></i> Outubro de 2016 - Atual</span>
              <span className="company">Sinnapse Publicidade e Propraganda</span>
              <span className="position">Desenvolvedor Front-End</span>
              <ul>
                <li>- HTML5</li>
                <li>- CSS3 (SASS)</li>
                <li>- Javascript (ES6, ReactJS)</li>
                <li>- jQuery</li>
                <li>- Wordpress</li>
                <li>- Gulp</li>
                <li>- Github</li>
                <li>- Photoshop</li>
                <li>- Wordpress</li>
              </ul>
            </div>
            <div className="works">
              <span className="date"><i className="fa fa-calendar"></i> Outubro de 2014 - setembro de 2016 (2 anos)</span>
              <span className="company">MicroWork Softwares</span>
              <span className="position">Suporte Técnico</span>
              <ul>
                <li>- Suporte ao cliente através do telefone e chat online referente aos sistemas da empresa</li>
                <li>- Consultas e Scripts no Banco de Dados Postgres, utilizando o Pl/pgSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Professional;
