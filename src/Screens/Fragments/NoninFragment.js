import React, { useState } from "react";
import "./NoninFragment.css"
import NonninBackgroundImage from "../../Assets/res/Images/SimulationScreen/Noonin/noninBackGround.png"
import Co2Screen from "../../Assets/Components/SimulationScreenComponents/NonninDeviceComponents/Co2Components/Co2Screen"


function NoninFragment(props) {
  const [co2Level, setCo2Level] = useState(7)

  return (
    <div className="nonnin-container-div">
      <div class="container-grid-nonnin">
        <div class="main-screen-area">

        </div>

        <div class="co2-screen-area">
          <Co2Screen co2Level={co2Level} ></Co2Screen>
        </div> 
        <div class="btns-scrren-area">
        
        </div>
      </div>
    </div>
  );

}

export default NoninFragment;
