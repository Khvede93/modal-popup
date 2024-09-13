import React from 'react';

export const Popup = ({ id, header, body, footer, handleHide }) => {
  return (
    <div id={id || 'Popup'} className='popup-container'>
      <div className='content'>
        <div className='header'>
          <h2>{header ? header : 'Default Header'}</h2>
          <span className='close-popup-icon' onClick={handleHide}>
            &times;
          </span>
        </div>
        <div className='body'>
          {body ? body : <div>Default Body Content</div>}
        </div>
        <div className='footer'>
          {footer ? footer : <h2>Default Footer</h2>}
        </div>
      </div>
    </div>
  );
};
