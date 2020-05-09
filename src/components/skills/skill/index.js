import React from 'react';

import './style.sass';

function Skill(props) {
  const { title, text, icon } = props;

  return (
    <div className="skill">
      <div className="skill-image">
        {icon}
      </div>
      <div className="skill-content">
        <h5 className="skill-title">{title}</h5>
        <p className="skill-description">{text}</p>
      </div>
    </div>
  )
}

export default Skill;
