import React from 'react';

import './style.sass';

function BlockText(props) {
  const { title, text, openModal, actionTitle, direction } = props
	return(
		<div className={ "block-text " + direction }>
      <h1 className="title">{title}</h1>
      <p>{text}</p>
      <button className="button" onClick={() => openModal()}>{actionTitle}</button>
    </div>
  );
}

export default BlockText;
