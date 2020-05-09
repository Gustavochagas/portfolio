import React, { useState } from 'react';
import { FaRegThumbsUp, FaRegHeart, FaYinYang, FaUserGraduate } from 'react-icons/fa';
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'

import Card from './skill/skill'
import Settings from '../../commons/settings';
import './style.sass';

const SKILLS = [
  {
    id: 1,
    title: 'My skill',
    text: 'Write a cool JS library',
    icon: <FaRegThumbsUp />
  },
  {
    id: 2,
    title: 'My other skill',
    text: 'Make it generic enough',
    icon: <FaRegHeart />
  },
  {
    id: 3,
    title: 'Hello world',
    text: 'Write README',
    icon: <FaYinYang />
  },
  {
    id: 4,
    title: 'Other example',
    text: 'Create some examples',
    icon: <FaUserGraduate />
  },
]
const Skills = () => {
  const [skills, setSkills] = useState(SKILLS);
  const [showChange, setShowChange] = useState(false);

  const moveCard = (id, atIndex) => {
    const { skill, index } = findCard(id)
    setSkills(
      update(skills, {
        $splice: [
          [index, 1],
          [atIndex, 0, skill],
        ],
      }),
    )
  }
  const findCard = (id) => {
    const skill = skills.filter((c) => `${c.id}` === id)[0]
    return {
      skill,
      index: skills.indexOf(skill),
    }
  }

  const [, drop] = useDrop({ accept: 'skill' })

  const settings = [
    { key: 'cant-change', title: 'No Change Position' },
    { key: 'can-change', title: 'Change Position' },
  ]

  function changeView(key) {
    if (key === 'can-change') {
      setShowChange(true);
    } else {
      setShowChange(false);
    }
  }

  return (
    <div className="skills">
      <Settings
        key="home"
        position="right"
        items={settings}
        changePosition={changeView}
      />
      <h1 className="title text-center">Skills</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <div className={"all-skills " + (showChange ? 'can-change' : '')} ref={drop}>
        {skills.map((skill) => (
          <Card
            key={skill.id}
            id={`${skill.id}`}
            icon={skill.icon}
            title={skill.title}
            text={skill.text}
            canChange={showChange}
            moveCard={moveCard}
            findCard={findCard}
          />
        ))}
      </div>
      {showChange &&
        <p>Now you can change the positions.</p>
      }
    </div>
  )
}
export default Skills
