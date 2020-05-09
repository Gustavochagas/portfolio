import React, { Component } from 'react';

import './style.sass';

import Progress from './progress';
import BlockText from '../../commons/block-text';

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
          <BlockText
            title="Gustavo Chagas"
            text="Hi, i'm front-end developer with +4y agile development experience."
            actionTitle="Contact"
            direction="left"
          />
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
