import React from 'react';
import  { useState } from 'react';

const CardSmall = ({ className, children }) => {
  const [isHoveredSm, setIsHoveredSm] =
 useState(false);
 
  const onMouseEnter = (e) => setIsHoveredSm(true);
  const onMouseLeave = (e) => setIsHoveredSm(false);
 
   className = isHoveredSm ? 'smHovered' : 'smSetHovered';
  return (
  <div 
 className= {className}
 onMouseEnter={onMouseEnter}
 onMouseLeave={onMouseLeave}
 >{ children }</div>
  );
 }
 

export default CardSmall