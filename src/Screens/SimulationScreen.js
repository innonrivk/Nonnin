import React, { useEffect, useState } from "react";
import "./SimulationScreen.css"
import SettingPanel from "./Fragments/SimulationFragments/SettingPanel";
import CablesFragment from "./Fragments/CablesFragment";

function SimulationScreen() {
  const [saturationInBlood, setSaturationInBlood] = useState(98)
  const [co2InBlow, setCo2InBlow] = useState(40)
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
        <div className="main-div" style={{backgroundColor: ""}} >
          
        <div  className="setting-panel">
          <CablesFragment setIsGreyCable={setIsGreyCable} setIsBlackCable={setIsBlackCable}></CablesFragment>
        </div>
        <div className="setting-1">
          <SettingPanel  setCo2InBlow={setCo2InBlow} setSaturationInBlood={setSaturationInBlood} ></SettingPanel>
        </div>

        


        
        </div>
      </div>
    </div>
  );

}

export default SimulationScreen;
