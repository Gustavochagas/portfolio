import React, { Component } from 'react';

import './style.sass';

import Progress from './progress';

class About extends Component {
  render() {
    const skills = [
      { name: 'HTML', status: 95 },
      { name: 'CSS/SASS', status: 85 },
      { name: 'Javascript', status: 80 },
      { name: 'MarkoJS', status: 80 },
      { name: 'ReactJS', status: 80 },
    ]
    return(
      <>
        <div className="about">
          <div className="about-content">
            <h1 className="title">Gustavo Chagas</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="button">Contact</button>
          </div>
          <div className="about-progress">
            {skills.map((skill, index) =>
              <Progress key={index} name={skill.name} status={skill.status} />
            )}
          </div>
        </div>
      </>
    )
  }
}

export default About;
