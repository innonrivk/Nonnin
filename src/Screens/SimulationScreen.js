import React, { useEffect, useState } from "react";
import "./SimulationScreen.css"
import SettingPanel from "./Fragments/SimulationFragments/SettingPanel.js";
import CablesFragment from "./Fragments/CablesFrag/CablesFragment.js";
import ReturnBtn from "../Assets/Components/ReturnBtn.js"
function SimulationScreen() {
  const [saturationInBlood, setSaturationInBlood] = useState(98)
  const [co2InBlow, setCo2InBlow] = useState(40)
  const [heartbeat, setHeartbeat] = useState(40)

  const [isBlackCable, setIsBlackCable] = useState(false)
  const [isGreyCable, setIsGreyCable] = useState(false)
  useEffect(() => {
    console.log(co2InBlow, saturationInBlood)
  
      console.log("black", isBlackCable)
      console.log("grey", isGreyCable)



    
  }, [saturationInBlood, co2InBlow, isBlackCable, isGreyCable])
  return (
    <div className="simulation-screen-frame">
      <div className="simulation-screen-frame-star">
        <div className="simulation-main-div" style={{backgroundColor: ""}} >
          <div className="simulation-return-btn">
            <ReturnBtn></ReturnBtn>
          </div>

        <div  className="setting-panel">
          <CablesFragment setIsGreyCable={setIsGreyCable} setIsBlackCable={setIsBlackCable}></CablesFragment>
        </div>
        <div className="setting-1">
          <SettingPanel  setHeartbeat={setHeartbeat} setCo2InBlow={setCo2InBlow} setSaturationInBlood={setSaturationInBlood} ></SettingPanel>
        </div>

        


        
        </div>
      </div>
    </div>
  );

}

export default SimulationScreen;
