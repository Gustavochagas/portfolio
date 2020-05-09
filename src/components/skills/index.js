import React from 'react';
import { FaRegThumbsUp, FaRegHeart, FaYinYang, FaUserGraduate } from 'react-icons/fa';

import './style.sass';

import Skill from './skill';

function Skills() {
  const skills = [
    { title: 'My Skill', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', icon: <FaRegThumbsUp /> },
    { title: 'My Second', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', icon: <FaRegHeart /> },
    { title: 'My Third', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', icon: <FaYinYang /> },
    { title: 'My Profile', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', icon: <FaUserGraduate /> },
  ];

  return (
    <div className="skills">
      <h1 className="title text-center">Skills</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className="all-skills">
        {skills.map((skill, index) =>
          <Skill
            key={index}
            title={skill.title}
            text={skill.text}
            icon={skill.icon}
          />
        )}
      </div>
    </div>
  )
}

export default Skills;
