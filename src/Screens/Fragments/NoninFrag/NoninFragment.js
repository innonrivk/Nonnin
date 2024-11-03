import React, { useEffect, useState } from "react";
import "./NoninFragment.css"
import Co2Screen from "../../../Assets/Components/SimulationScreenComponents/NonninDeviceComponents/Co2Components/Co2Screen"
import MainScreen from "../../../Assets/Components/SimulationScreenComponents/NonninDeviceComponents/MainScreenComponent/MainScreen"
import ButtonsFrag from "./ButtonsFrag/ButtonsFrag.js";
function NoninFragment(props) {
  const [co2Level, setCo2Level] = useState();
  const [chosenBtn, setChosenBtn] = useState();
  const [isPowerBtn, setIsPowerBtn] = useState()
  const [heartBeat, setHeartBeat] = useState();
  const [saturationInBlood, setSaturationInBlood] = useState();

 
  useEffect(()=>{

    if (Object(chosenBtn).length == 2){
      console.log("2 items")
      console.log(chosenBtn)

    }
    if(chosenBtn == "offButton"){
      setIsPowerBtn(prev => !prev)
    }
    setChosenBtn(prev => null)

  }, [chosenBtn])

  useEffect(()=>{
    console.log(isPowerBtn)
    if(!isPowerBtn){
      setCo2Level(77)
      setHeartBeat(65)
      setSaturationInBlood(120)
    }
    else{
      setChosenBtn(null)
      setCo2Level(null)
      setHeartBeat(null)
      setSaturationInBlood(null)
    }
  }, [isPowerBtn])
  return (
    <div className="nonnin-container-div">
      <div className="container-grid-nonnin">
        <div className="main-screen-area">
            <MainScreen heartBeat={heartBeat}  saturationInBlood={saturationInBlood} ></MainScreen>
        </div>

        <div className="co2-screen-area">
          <Co2Screen co2Level={co2Level} ></Co2Screen>
        </div>
        <div className="btns-scrren-area">
            <ButtonsFrag setChosenBtn={setChosenBtn}></ButtonsFrag>
        </div>
      </div>
    </div>
  );

}

export default NoninFragment;
