import React from 'react'

const TextSize = ({ as, children } ) => {
  switch (as) {
    case "h2":
      return <h2 className={as}>{children}</h2>;
    case "h3":
      return <h3 className={as}>{children}</h3>;
    case "p":
      return <p className={as}>{children}</p>;
    case "numberBig":
      return <p className={as}>{children}</p>;
    case "numberSmall":
      return <p className={as}>{children}</p>;
      case "followerStyle":
        return <p className={as}>{children}</p>;
    default:
      return <h1 className={as}>{children}</h1>;  
    break;  
  }
}

export default TextSize