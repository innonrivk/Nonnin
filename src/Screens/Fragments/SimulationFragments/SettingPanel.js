import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SettingPanel.css"
import SettingBtn from "../../../Assets/Components/SimulationScreenComponents/SettingComponents/SettingBtn.js";
import SettingInputArea from "../../../Assets/Components/SimulationScreenComponents/SettingComponents/SettingInputArea";

function SettingPanel(props) {
  const [isSettingBtnClicked, setIsSettingBtnClicked] = useState(false)
  
  useEffect(()=>{
    console.log(isSettingBtnClicked)
  }, [isSettingBtnClicked]);
  return (
    <div className="container">
      <div className="div-btn" >
     <SettingBtn cbFunction={setIsSettingBtnClicked}></SettingBtn>
     </div>
     
     <div className={`div-input-area ${isSettingBtnClicked ? "" : "visible"}`}>
        <SettingInputArea setCo2InBlow={props.setCo2InBlow} setSaturationInBlood={props.setSaturationInBlood} isClosing={isSettingBtnClicked} setIsClosing={setIsSettingBtnClicked} />
      </div>
      
    </div>
  );

}

export default SettingPanel;
