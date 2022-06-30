
import React from 'react';
import  { useState } from 'react';

const BackgroundTheme = ({ children }) => {
  
  const [mode, setMode] = useState('light-theme');

  const onChange = () => {
    setMode(mode === 'light-theme' ? 'dark-theme' : 'light-theme');
  };

  return (
      <div className={mode}>
      <input
        type='checkbox'
        className='form-check-input'
        id='customSwitches'
        readOnly
        onChange = {onChange}
      />
      <label className='form-check-label' htmlFor='customSwitches'>
        Toggle this switch element
      </label>
      {children}
    </div>
  );
};
  

 
 export default BackgroundTheme
