import React, { Fragment, Component } from 'react';

import profilePicture from '../../assets/images/profile.jpg';

class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="container">
        <div className="about">
          <div className="about__top">
            <div className="picture">
              <img src={profilePicture} alt="Minha Foto"/>
            </div>
            <div className="profile">
              <h2>Gustavo Chagas</h2>
              <p>Desenvolvedor de Front-End</p>

              <div className="profile__pessoal">
                <div>
                  <h2 className="h2--mini">Idade</h2>
                  <span>22 Anos</span>
                </div>
                <div>
                  <h2 className="h2--mini">Cidade</h2>
                  <span>Americana/SP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about__bottom">
            <div className="item">
              <h2>Sobre</h2>
              <p>Sou formado em Sistemas de Informação e trabalho na área de desenvolvimento web desde 2016.</p>
              <p>Atuo como front-end e tenho familiaridade com as principais linguagens de programação web (HTML, CSS e JavaScript), além de utilizar diversas ferramentas de acordo com o escopo da cada projeto, como JQuery, React, GIT, e Photoshop.</p>
            </div>

            <div className="item">
              <h2>Skills</h2>
              <ul>
                <li>HTML5</li>
                <li>CSS3 (SASS)</li>
                <li>Javascript (ES6, ReactJSm jQuery)</li>
                <li>Wordpress</li>
                <li>Gulp</li>
                <li>Git</li>
                <li>Photoshop</li>
                <li>Wordpress</li>
                <li>PHP</li>
                <li>Design Responsivo</li>
                <li>NodeJS</li>
              </ul>
            </div>

            <div className="item">
              <h2>Idiomas</h2>
              <ul>
                <li>Inglês (intermediário)</li>
              </ul>
            </div>

            <div className="item">
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
          <div>
          </div>
        </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
