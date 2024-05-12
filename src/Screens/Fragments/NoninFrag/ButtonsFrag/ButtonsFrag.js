import React, { useEffect, useState } from "react";
import arrowsButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/arrowsButton.png"
import batteryButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/batteryButton.png"
import bellButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/bellButton.png"
import offButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/offButton.png"
import pollsButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/pollsButton.png"




import NonninButton from "../../../../Assets/Components/SimulationScreenComponents/NonninDeviceComponents/ButtonsComponents/NonninButton";
import "./ButtonsFrag.css"


function ButtonsFrag(props) {
  const [chosenBtn, setChosenBtn] = useState();
    useEffect(()=>{
      console.log(chosenBtn)
    }, [chosenBtn])
  return (
   <div className="container-buttons-frag" >
    <div className="buttons-frag-grid">
    <div className="btn1">
    <NonninButton setPressedBtn={setChosenBtn} imageSource={offButton} buttonName={"offButton"} ></NonninButton>
    </div>
    <div className="btn2">
    <NonninButton setPressedBtn={setChosenBtn} imageSource={pollsButton} buttonName={"pollsButton"} ></NonninButton>
    </div>
    <div className="btn3">
      <NonninButton setPressedBtn={setChosenBtn} imageSource={arrowsButton} buttonName={"arrowsButton"} ></NonninButton>
    </div>
    <div className="btn4">
    <NonninButton setPressedBtn={setChosenBtn} imageSource={bellButton} buttonName={"bellButton"} ></NonninButton>
    </div>
    <div className="btn5">
    <NonninButton setPressedBtn={setChosenBtn} imageSource={batteryButton} buttonName={"batteryButton"} ></NonninButton>
    </div>
    
    </div>
   </div>
  );

}


export default ButtonsFrag;
