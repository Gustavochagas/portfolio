import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaMailBulk } from "react-icons/fa";

import './style.sass';

function Footer() {
  const socials = [
    { icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/gustavo-chagas-578706107/' },
    { icon: <FaMailBulk />, link: 'mailto:gustavochagasb@gmail.com' },
    { icon: <FaFacebookF />, link: 'https://www.facebook.com/gustavochagasss' },
  ]

  return(
    <div className="footer">
      <h1 className="title text-center">Contact</h1>
      <div className="socials">
        {socials.map(social =>
          <a href={social.link} target="_blank" rel="noopener noreferrer" className="social-item">{social.icon}</a>
        )}
      </div>
    </div>
  );
}

export default Footer;
