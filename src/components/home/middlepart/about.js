import React, { Fragment, Component } from 'react';

class About extends Component {
  render() {
    return (
      <Fragment>
        <div className="item">
          <div>
            <h2>Sobre</h2>
            <p>Sou formado em Sistemas de Informação e trabalho na área de desenvolvimento web desde 2016.</p>
            <p>Atuo como front-end e tenho familiaridade com as principais linguagens de programação web (HTML, CSS e JavaScript), além de utilizar diversas ferramentas de acordo com o escopo da cada projeto, como JQuery, React, GIT, e Photoshop.</p>

            <h2 className="mini">Skills</h2>
            <ul>
              <li>- HTML5</li>
              <li>- CSS3 (SASS)</li>
              <li>- Javascript (ES6, ReactJS)</li>
              <li>- jQuery</li>
              <li>- Wordpress</li>
              <li>- Gulp</li>
              <li>- Git</li>
              <li>- Photoshop</li>
              <li>- Wordpress</li>
              <li>- PHP</li>
              <li>- Design Responsivo</li>
              <li>- NodeJS</li>
            </ul>

            <h2 className="mini">Idiomas</h2>
            <ul>
              <li>- Inglês (intermediário)</li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default About;
