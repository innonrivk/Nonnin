import React, {  useState } from "react";
import "./SettingPanel.css"
import SettingBtn from "../../../Assets/Components/SimulationScreenComponents/SettingComponents/SettingBtn.js";
import SettingInputArea from "../../../Assets/Components/SimulationScreenComponents/SettingComponents/SettingInputArea.js";

function SettingPanel(props) {
  const [isSettingBtnClicked, setIsSettingBtnClicked] = useState(true)
  

  return (
    <div className="container-setting-panel">
      <div className="div-btn" >
     <SettingBtn cbFunction={setIsSettingBtnClicked}></SettingBtn>
     </div>
     
     <div className={`div-input-area ${isSettingBtnClicked ? "" : "visible"}`}> 
        <SettingInputArea  setHeartbeat={props.setHeartbeat} setCo2InBlow={props.setCo2InBlow} setSaturationInBlood={props.setSaturationInBlood} isClosing={isSettingBtnClicked} setIsClosing={setIsSettingBtnClicked} />
      </div>
      
    </div>
  );

}

export default SettingPanel;
