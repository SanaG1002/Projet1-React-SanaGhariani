import React from 'react'

const PercentStyle = ({as, children }) => {
  switch (as) {
    case "colorGreen":
      return <p className={as}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#1EB589" fill-rule="evenodd" d="M0 4l4-4 4 4z"/></svg>
                {children}
              </p>;
    case "colorRed":
      return <p className={as}><svg xmlns="http://www.w3.org/2000/svg" width="8" height="4"><path fill="#DC414C" fill-rule="evenodd" d="M0 0l4 4 4-4z"/></svg>
              {children}
              </p>;
    default: 
    break;  
  }
}

export default PercentStyle