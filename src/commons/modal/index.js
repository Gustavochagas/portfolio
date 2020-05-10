import React from 'react';

import './style.sass';

function Modal(props) {
  const { closeModal } = props;

	return(
    <>
      <div className="modal-bg">
        <div className="close-modal" onClick={() => closeModal()} />
        <div className="modal">
          <h4>Contact</h4>
          <p>Send an e-mail to gustavochagasb@gmail.com.</p>
        </div>
      </div>
    </>
  );
}

export default Modal;
