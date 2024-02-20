import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SettingBtnImg from "../../../res/Images/SimulationScreen/SettingBtn.svg"
import "./SettingBtn.css"

function SettingBtn(props) {
    
    function clickHandle() {
      props.cbFunction(prev => !prev)
      
    }
    
    return (
      <div>
            <button className="setting-btn" onClick={clickHandle}>
                <img className="setting-btn-image" src={SettingBtnImg}></img>
            </button>
            </div>
    );

}

export default SettingBtn;
