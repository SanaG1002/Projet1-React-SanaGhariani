
import React from 'react';
import  { useState } from 'react';

const ButtonMode = ({ children }) => {
  
  const [IsMode, setIsMode] = useState('light-theme');

  const onChange = () => {
    setIsMode = 'dark-theme'
  };
  
  return (
    <div className='form-check form-switch'>
    <input
      type='checkbox'
      className='form-check-input'
      id='customSwitches'
      readOnly
    />
    <label className='form-check-label' htmlFor='customSwitches'>
      Toggle this switch element
    </label>
  </div>
);
};
  

 
 export default ButtonMode
