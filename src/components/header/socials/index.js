import React from 'react';

import './style.sass';

function Socials({ icon, link }) {
	return(
		<li className="social-item">
			<a href={link} rel="noopener noreferrer" target="_blank">{icon}</a>
		</li>
  );
}

export default Socials;