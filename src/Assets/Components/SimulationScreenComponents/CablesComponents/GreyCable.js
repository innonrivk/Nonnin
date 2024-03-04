import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
import GreyCableImage from "../../../res/Images/SimulationScreen/cables/greyCabel.png"
import "./GreyCabele.css"
function GreyCable() {
    const [click, setClick] = useState(false)

  return (
    <div className="container">
        <button className="container-btn" onClick={setClick(prev => !prev)}>
        <img  src={GreyCableImage} className="" />
        </button>    
    </div>
    );

}

export default GreyCable;
