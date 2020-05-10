import React, { useState } from 'react';
import './style.sass';

function Tools(props) {
  const { name, icon, id } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  function showTT(bool) {
    setShowTooltip(bool);
  }

  function goTo(element) {
    const el = document.getElementById(element);
    el.scrollIntoView({ behavior: 'smooth' });
  }

	return(
		<li className="tool-item" onMouseEnter={() => showTT(true)} onMouseLeave={() => showTT(false)} onClick={() => goTo(id)}>
			<button>{icon}</button>
      {showTooltip && <span className="tooltip">{name}</span>}
		</li>
  );
}

export default Tools;
