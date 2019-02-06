import React, { Fragment, Component } from 'react';

import MockupCASJ from '../../assets/images/mockup-casj.png';
import MockupGPTW from '../../assets/images/mockup-gptw.png';
import MockupMETROFIT from '../../assets/images/mockup-metrofit.png';

class Portfolio extends Component {
  render() {
    return (
      <Fragment>
        <div className="portfolio">
            <h2>Alguns Trabalhos</h2>
            <div className="portfolio__item">
              <div className="portfolio__imagem">
                <img src={MockupCASJ} alt="CASJ"/>
              </div>
              <div className="portfolio__desc">
                <h2 className="portflio__title">CASJ</h2>
                <span className="portfolio__link">http://www.casj.com.br/</span>
                <a href="http://www.casj.com.br/" target="_blank" rel="noopener noreferrer">Acessar</a>
              </div>
            </div>

            <div className="portfolio__item">
              <div className="portfolio__imagem">
                <img src={MockupGPTW} alt="GPTW"/>
              </div>
              <div className="portfolio__desc">
                <h2 className="portflio__title">GPTW</h2>
                <span className="portfolio__link">https://www.gptw.com.br/</span>
                <a href="https://www.gptw.com.br/" target="_blank" rel="noopener noreferrer">Acessar</a>
              </div>
            </div>

            <div className="portfolio__item">
              <div className="portfolio__imagem">
                <img src={MockupMETROFIT} alt="Metrofit"/>
              </div>
              <div className="portfolio__desc">
                <h2 className="portflio__title">METROFIT</h2>
                <span className="portfolio__link">https://www.metrofit.com.br/</span>
                <a href="https://www.metrofit.com.br/" target="_blank" rel="noopener noreferrer">Acessar</a>
              </div>
            </div>
        </div>
      </Fragment>
    );
  }
}

export default Portfolio;
