import { useState } from 'react';

const MyComponent = () => {
 const [isHovered, setIsHovered] =
useState(false);
 // On change l’état de isHovered à true
 const onMouseEnter = () => setIsHovered(true);
 // On change l’état de isHovered à false
 const onMouseLeave = () => setIsHovered(false);
 className = isHovered ? 'yes' : 'no';
 return (
 <div
className={className}
onMouseEnter={onMouseEnter}
onMouseLeave={onMouseLeave}>Hover Me</div>
 );
}
