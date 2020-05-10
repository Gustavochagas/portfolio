import React, { useState } from 'react';


import './style.sass';

import Illustration from '../../assets/illustration.svg';
import BlockText from '../../commons/block-text';
import Settings from '../../commons/settings';

function Home(props) {
  const { openModal } = props;

  const style = [
    { type: 'left', class: '' },
    { type: 'right', class: 'right' },
    { type: 'no-image', class: 'no-image' },
  ];

  const [activeClass, setActiveClass] = useState(style[0].class);

  const settings = [
    { key: 'left', title: 'Left' },
    { key: 'right', title: 'Right' },
    { key: 'no-image', title: 'No image' },
  ]

  function changePosition(key) {
    const findKey = style.find(s => s.type === key);
    if (findKey) setActiveClass(findKey.class);
  }

  return (
    <>
      <div className={"home " + activeClass}>
        <Settings
          key="home"
          position="right"
          items={settings}
          changePosition={changePosition}
        />
        <div className="home-image">
          <img src={Illustration} title="Ilustration" alt="Illustration" />
        </div>
        <BlockText
          title="Frontend Developer"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          actionTitle="Contact"
          direction="right"
          openModal={openModal}
        />
      </div>
    </>
  )
}

export default Home;
