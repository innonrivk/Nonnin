import React, { useEffect, useState  } from "react";
import arrowsButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/arrowsButton.png"
import batteryButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/batteryButton.png"
import bellButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/bellButton.png"
import offButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/offButton.png"
import pollsButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/pollsButton.png"
import NonninButton from "../../../../Assets/Components/SimulationScreenComponents/NonninDeviceComponents/ButtonsComponents/NonninButton";
import "./ButtonsFrag.css"


function ButtonsFrag(props) {
  const [isLongPress, setIsLongPress] = useState(null)
  const [chosenBtn1, setChosenBtn1] = useState(null)
  const [chosenBtn2, setChosenBtn2] = useState(null)
    function setPressedBtn(btnName){
      if(isLongPress){
        if (chosenBtn1 != null) {
          setChosenBtn2(btnName)
          return;
        }
      }
      // console.log("chosenbtn1",chosenBtn1)
      // console.log("chosenbtn2",chosenBtn2)
      // console.log("isLongPress",isLongPress)
     setChosenBtn1(btnName)
    }
    function clearParams(){
      setChosenBtn1(null)
      setChosenBtn2(null)
    }
    
    useEffect(()=>{
      // console.log("chosenbtn1",chosenBtn1)
      // console.log("chosenbtn2",chosenBtn2)
      // console.log("isLongPress",isLongPress)
      if(isLongPress){
        if(chosenBtn1 != null && chosenBtn2 != null){
          props.setChosenBtn([chosenBtn1, chosenBtn2])
          clearParams()
          setIsLongPress(false)
        }

      }
      else{
        if(chosenBtn1 != null){
          props.setChosenBtn(chosenBtn1)
          clearParams()
          setIsLongPress(false)
        }
      }
    } , [chosenBtn1, chosenBtn2, isLongPress])
    return (
   <div className="container-buttons-frag" >
    <div className="buttons-frag-grid">
    <div className="btn1">
    <NonninButton  isLongPress={isLongPress}  setIsLongPress={setIsLongPress} setPressedBtn={setPressedBtn} imageSource={offButton} buttonName={"offButton"} ></NonninButton>
    </div>
    <div className="btn2">
    <NonninButton  isLongPress={isLongPress}  setIsLongPress={setIsLongPress} setPressedBtn={setPressedBtn} imageSource={pollsButton} buttonName={"pollsButton"} ></NonninButton>
    </div>
    <div className="btn3">
      <NonninButton  isLongPress={isLongPress}  setIsLongPress={setIsLongPress} setPressedBtn={setPressedBtn} imageSource={arrowsButton} buttonName={"arrowsButton"} ></NonninButton>
    </div>
    <div className="btn4">
    <NonninButton  isLongPress={isLongPress}  setIsLongPress={setIsLongPress} setPressedBtn={setPressedBtn} imageSource={bellButton} buttonName={"bellButton"} ></NonninButton>
    </div>
    <div className="btn5">
    <NonninButton  isLongPress={isLongPress}  setIsLongPress={setIsLongPress} setPressedBtn={setPressedBtn} imageSource={batteryButton} buttonName={"batteryButton"} ></NonninButton>
    </div>
    
    </div>
   </div>
  );

}


export default ButtonsFrag;
