import React, { Component } from 'react';
import { FaLinkedinIn, FaFacebookF, FaMailBulk } from "react-icons/fa";
import { MdFace, MdHome, MdContacts, MdSchool } from "react-icons/md";

import './style.sass';

import Tools from './tools';
import Socials from './socials';

class Header extends Component {
  render() {
    const tools = [
      { icon: <MdHome />, name: 'Home' },
      { icon: <MdFace />, name: 'About' },
      { icon: <MdSchool />, name: 'Skills' },
      { icon: <MdContacts />, name: 'Contact' },
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
              <Tools key={index} name={tool.name} icon={tool.icon}  />
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
}

export default Header;
