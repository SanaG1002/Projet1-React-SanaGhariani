import React from 'react'

const DisplayPage = ({as, children }) => {

  switch (as) {
    case "displayCard":
      return  <div className= 'd-flex flex-row justify-content-evenly' >{children}</div>;
    case "displayHead":
      return <div className= 'd-flex justify-content-between' >{children}</div>; 
    case "displayTitle":
      return <div className= 'd-flex flex-column' >{children}</div>;
    default:
    break;  
  }
}

export default DisplayPage