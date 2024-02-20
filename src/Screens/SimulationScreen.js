import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SimulationScreen.css"
import WhiteStar from "../Assets/res/Images/SimulationScreen/WhiteBackGroundStar.png"
import SettingBtn from "../Assets/Components/SimulationScreenComponents/SettingComponents/SettingBtn";
import SettingPanel from "./Fragments/SimulationFragments/SettingPanel";

function SimulationScreen() {
  const [saturationInBlood, setSaturationInBlood] = useState(98)
  const [co2InBlow, setCo2InBlow] = useState(40)
  useEffect(() => {
    console.log(co2InBlow, saturationInBlood)
    
  }, [saturationInBlood, co2InBlow])
  return (
    <div className="simulation-screen-frame">
      <div className="simulation-screen-frame-star">
        <div className="main-div" style={{backgroundColor: ""}} >
          <SettingPanel setCo2InBlow={setCo2InBlow} setSaturationInBlood={setSaturationInBlood} ></SettingPanel>
        </div>
      </div>
    </div>
  );

}

export default SimulationScreen;
