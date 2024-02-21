import React from "react";
import { useNavigate } from "react-router-dom";
import "./SimulationBtn.css"
import SimBtnSvg from "../../res/Images/EnteryScreen/NoninBtn.svg"

function SimulationBtn(props) {
    const navigate = useNavigate()
    
    return (
        <div className="simulation">
            <button  onClick={() => { navigate("/simulation")}} className="simulation-btn-container">
                <img className="simulation-btn-image" src={SimBtnSvg} alt="Start Simulation" ></img>
            </button>
        </div>
    );

}

export default SimulationBtn;
