import React, { Component, useState } from 'react';
import Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';

import Modal from './commons/modal';

const headerPosition = [
  { key: 'left', class: '' },
  { key: 'right', class: 'header-right'} ,
  { key: 'top', class: 'header-top' },
  { key: 'bottom', class: 'header-bottom' },
];

function App() {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className={"all " + headerPosition[0].class}>
      {showModal &&
        <Modal
          closeModal={closeModal}
        />
      }
      <Header />
      <div className="all-content">
      <DndProvider backend={Backend}>
        <Home
          openModal={openModal}
        />
        <About />
        <Skills />
      </DndProvider>
      </div>
    </div>
  );
}

export default App;
