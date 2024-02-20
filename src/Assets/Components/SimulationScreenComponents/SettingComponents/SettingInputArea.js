import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SettingBtnImg from "../../../res/Images/SimulationScreen/SettingBtn.svg"
import "./SettingInputArea.css"
import ClosingTouchBar from "./SettingInputAreaComponents/ClosingTouchBar";
import InputField from "./SettingInputAreaComponents/InputField";
function SettingInputArea(props) {
    
   
    
    return (
            <div className={`input-area`}>
                <div className="touchbar-div">
                <ClosingTouchBar setIsClosing={props.setIsClosing}></ClosingTouchBar>
                </div>

                {/* for saturation in blood */}
                <div className="input-saturation"> 
                <InputField setInput={props.setSaturationInBlood} text="סטורציה" ></InputField>
                </div>
                {/*  for co2 in air blow */}
                <div className="input-co2">
                <InputField setInput={props.setCo2InBlow} text="פד״ח בנשיפה" ></InputField>
                </div>
            </div>
    );

}

export default SettingInputArea;
