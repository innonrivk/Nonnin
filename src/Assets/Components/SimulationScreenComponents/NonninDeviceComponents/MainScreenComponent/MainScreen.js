import React, { useState } from "react";
import "./MainScreen.css"
import MainScreenTextComponent from "./MainScreenTextComponent";


function MainScreen(props) {
    const [heartBeat, setHeartBeat] = useState(12)
    const [saturationInBlood, setSaturationInBlood] = useState(23)

  return (
    <div className="main-screen-contianer-div">
    <div className="main-screen-grid">
     <div className="upper-grid-screen">
        <MainScreenTextComponent text={saturationInBlood}></MainScreenTextComponent>
     </div>
     <div className="bottom-grid-screen">
     <MainScreenTextComponent text={heartBeat}></MainScreenTextComponent>
     </div>
    </div>
  </div>
  );

}


export default MainScreen;
