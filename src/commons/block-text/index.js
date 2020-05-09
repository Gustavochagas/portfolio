import React from 'react';

import './style.sass';

function BlockText(props) {
  const { title, text, action, actionTitle, direction } = props
	return(
		<div className={ "block-text " + direction }>
      <h1 className="title">{title}</h1>
      <p>{text}</p>
      <button className="button">{actionTitle}</button>
    </div>
  );
}

export default BlockText;
