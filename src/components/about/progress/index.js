import React from 'react';

import './style.sass';

function Progress(props) {
  const { name, status } = props
	return(
		<div className="progress">
      <div className="label">{name}</div>
      <div classname="status">{status} %</div>
      <div className="progress-bar">
        <div className="stats" style={{width: status+'%' }} />
      </div>
    </div>
  );
}

export default Progress;
