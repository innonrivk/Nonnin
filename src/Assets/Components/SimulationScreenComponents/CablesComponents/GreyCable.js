import React, { useState } from "react";

import "./GreyCable.css"
function GreyCable(props) {
    const [click, setClick] = useState(false)

    function clickHandle(){
      setClick(prev => !prev)
      props.cbFunction(prev => !prev)
    }
  return (
    <div className="container">
        <button className="container-btn" onClick={() => {clickHandle()}}>
        <img  src={click ? props.imagePressed : props.image} className="container-img" />
        </button>    
    </div>
    );

}
 
export default GreyCable;
