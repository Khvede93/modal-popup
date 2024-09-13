import React, { useState } from 'react';
import { Popup } from './Popup';
import './ModalPopup.css';

export const ModalPopup = () => {
  const [shopPopup, setShowPopup] = useState(false);

  function handleClickShowPopup() {
    setShowPopup(!shopPopup);
  }

  return (
    <div className='modal-popup-container'>
      <button onClick={handleClickShowPopup}>Open Popup</button>
      {shopPopup && <Popup body={<div>Customised Body</div>} />}
    </div>
  );
};
