import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaMailBulk } from "react-icons/fa";
import { MdFace, MdHome, MdContacts, MdSchool } from "react-icons/md";

import './style.sass';

import Tools from './tools';
import Socials from './socials';

function Header() {
  const tools = [
    { icon: <MdHome />, name: 'Home', key: 'home' },
    { icon: <MdFace />, name: 'About', key: 'about' },
    { icon: <MdSchool />, name: 'Skills', key: 'skills' },
    { icon: <MdContacts />, name: 'Contact', key: 'contact' },
  ];

  const socials = [
    { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/gustavo-chagas-578706107/' },
    { icon: <FaMailBulk />, link: 'mailto:gustavochagasb@gmail.com' },
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/gustavochagasss' },
  ]

  return(
    <>
      <div className="header">
        <div className="logo">
          <p>G</p>
        </div>
        <ul className="tools">
          { tools.map((tool, index) =>
            <Tools key={index} name={tool.name} icon={tool.icon} id={tool.key} />
          ) }
        </ul>
        <div className="socials">
          { socials.map((social, index) =>
            <Socials key={index} icon={social.icon} link={social.link} />
          ) }
        </div>
      </div>
    </>
  );
}

export default Header;
