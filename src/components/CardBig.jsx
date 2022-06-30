
import React from 'react';
import  { useState } from 'react';

const CardBig = ({ className, children }) => {
  const [isHovered, setIsHovered] = useState(false);
 
  const onMouseEnter = (e) => setIsHovered(true);
  const onMouseLeave = (e) => setIsHovered(false);
 
  className = isHovered ? 'bgHovered' : 'bgSetHovered';
  
  return (
  <div className= {className}
 onMouseEnter={onMouseEnter}
 onMouseLeave={onMouseLeave}>{ children }</div>
  );
 }
 

export default CardBig


