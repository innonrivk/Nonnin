import React from "react";
import SettingBtnImg from "../../../res/Images/SimulationScreen/SettingBtn.svg"
import "./SettingBtn.css"

function SettingBtn(props) {
    
    function clickHandle() {
      props.cbFunction(prev => !prev)
      
    }
    
    return (
      <div>
            <button className="setting-btn" onClick={clickHandle}>
                <img alt="SETTING" className="setting-btn-image" src={SettingBtnImg}></img>
            </button>
            </div>
    );

}

export default SettingBtn;
