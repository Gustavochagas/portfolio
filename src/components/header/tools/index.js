import React from 'react';

import './style.sass';

function Tools({ name, icon }) {
	return(
		<li className="tool-item">
			<a href=" ">{icon}</a>
			<span className="tooltip">{name}</span>
		</li>
  );
}

export default Tools;