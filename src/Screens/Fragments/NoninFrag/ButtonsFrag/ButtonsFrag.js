import React, { useEffect, useState  } from "react";
import arrowsButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/notPressed/arrowsButton.png"
import batteryButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/notPressed/batteryButton.png"
import bellButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/notPressed/bellButton.png"
import offButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/notPressed/offButton.png"
import pollsButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/notPressed/pollsButton.png"
import longPressArrowsButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/longPressed/arrowsButton.png"
import longPressBellButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/longPressed/bellButton.png"
import longPressOffButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/longPressed/offButton.png"
import longPressPollsButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/longPressed/pollsButton.png"
import pressedArrowsButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/longPressed/arrowsButton.png"
import pressedBellButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/pressed/bellButton.png"
import pressedOffButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/pressed/offButton.png"
import pressedPollsButton from "../../../../Assets/res/Images/SimulationScreen/Noonin/Buttons/pressed/pollsButton.png"
import NonninButton from "../../../../Assets/Components/SimulationScreenComponents/NonninDeviceComponents/ButtonsComponents/NonninButton";
import "./ButtonsFrag.css"


function ButtonsFrag(props) { 
  const [isLongPress, setIsLongPress] = useState(null)
  const [chosenBtn1, setChosenBtn1] = useState(null)
  const [chosenBtn2, setChosenBtn2] = useState(null)

    function isBtnChosen(btnName){
      if ((chosenBtn1 ==  btnName || chosenBtn2 == btnName) && isLongPress ){
        return true
      }
      return false
    }
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
      setIsLongPress(null)
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
    <NonninButton  isLongPress={isLongPress}  isBtnChosen={isBtnChosen}  setIsLongPress={setIsLongPress} setPressedBtn={setPressedBtn} pressedImageSource={longPressOffButton} longPressedImageSource={pressedOffButton}  imageSource={offButton} buttonName={"offButton"} ></NonninButton>
    </div>
    <div className="btn2">
    <NonninButton  isLongPress={isLongPress}  isBtnChosen={isBtnChosen}  setIsLongPress={setIsLongPress} setPressedBtn={setPressedBtn} pressedImageSource={longPressPollsButton} longPressedImageSource={pressedPollsButton} imageSource={pollsButton} buttonName={"pollsButton"} ></NonninButton>
    </div>
    <div className="btn3">
      <NonninButton  isLongPress={isLongPress}  isBtnChosen={isBtnChosen}  setIsLongPress={setIsLongPress} setPressedBtn={setPressedBtn} pressedImageSource={longPressArrowsButton} longPressedImageSource={pressedArrowsButton} imageSource={arrowsButton} buttonName={"arrowsButton"} ></NonninButton>
    </div>
    <div className="btn4">
    <NonninButton  isLongPress={isLongPress}  isBtnChosen={isBtnChosen}  setIsLongPress={setIsLongPress} setPressedBtn={setPressedBtn} pressedImageSource={longPressBellButton} longPressedImageSource={pressedBellButton} imageSource={bellButton} buttonName={"bellButton"} ></NonninButton>
    </div>
    <div className="btn5">
    <NonninButton  isLongPress={isLongPress}  isBtnChosen={isBtnChosen}  setIsLongPress={setIsLongPress} setPressedBtn={setPressedBtn} pressedImageSource={batteryButton} longPressedImageSource={batteryButton} imageSource={batteryButton} buttonName={"batteryButton"} ></NonninButton>
    </div>
    
    </div>
   </div>
  );

}


export default ButtonsFrag;
