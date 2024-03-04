import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import GreyCable from "../../../res/Images/SimulationScreen/cables/greyCable.png"
import "./GreyCable.css"
function GreyCable() {
    const [click, setClick] = useState(false)

  return (
    <div className="container">
        <button className="container-btn" onClick={setClick(prev => !prev)}>
        <img  src={GreyCable} className="" />
        </button>    
    </div>
    );

}

export default GreyCable;
