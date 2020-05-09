import React, { useState } from 'react';
import { FaRegSun } from 'react-icons/fa';

import './style.sass';

function Settings(props) {
  const { position, items, changePosition } = props;
  const [showItems, setShowItems] = useState(false);

  function emitClickOpt(key) {
    changePosition(key);
  }

	return(
		<div className={ "settings " + position } onClick={() => setShowItems(!showItems)}>
      <FaRegSun title="Set image position" />
      {showItems &&
        <div className="settings-content" onMouseLeave={() => setShowItems(false)}>
          {items.map((item, index) =>
            <div key={index} className={ "setting-item " + (item.active ? 'active' : '') } onClick={() => emitClickOpt(item.key)}>{item.title}</div>
          )}
        </div>
      }
    </div>
  );
}

export default Settings;
