import React, { useState } from 'react';

import './style.sass';

function Tools(props) {
  const { name, icon } = props;
  const [showTooltip, setShowTooltip] = useState(false);

  function showTT(bool) {
    setShowTooltip(bool);
  }

	return(
		<li className="tool-item" onMouseEnter={() => showTT(true)} onMouseLeave={() => showTT(false)}>
			<button>{icon}</button>
      {showTooltip && <span className="tooltip">{name}</span>}
		</li>
  );
}

export default Tools;
