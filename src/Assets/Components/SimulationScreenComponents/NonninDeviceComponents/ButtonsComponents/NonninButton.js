import React, { useCallback, useEffect, useRef, useState } from "react";
import "./NonninButton.css"
import { Await } from "react-router-dom";

function NonninButton(props) {
  const [action, setAction] = useState();
  const timerRef = useRef();
  const longPress = useRef();
  const cb = useCallback()


  useEffect(()=>{
    console.log("props.isLongPress" ,props.isLongPress)
    if(!props.isLongPress){
      setTimeout(()=>{
        setAction(false)
        longPress.current = false}, 500)
    
    }
  }, [props.isLongPress])


 async function startPressTimer() {
     timerRef.current =  setTimeout(() => {
      longPress.current = true;
      setAction(true);
    }, 500)
  }

  function handleOnClick  (e)   { 
   console.log('handleOnClick'); 
   if(action){
    console.log("longpress" ,longPress.current)
   }
    if ( longPress.current ) {
      props.setIsLongPress(true);
    }
    else if (longPress.current && props.isLongPress) {
       props.setIsLongPress(false)
    } 
    props.setPressedBtn(props.buttonName)
  }

  function handleOnMouseDown() {
    startPressTimer();
    console.log('handleOnMouseDown');

  }

  function handleOnMouseUp() {
    console.log('handleOnMouseUp');
  }

  function handleOnTouchStart() {
    console.log('handleOnTouchStart');
    startPressTimer();
  }

  function handleOnTouchEnd() {
    if ( longPress.current === true ) return;
    console.log('handleOnTouchEnd');
    clearTimeout(timerRef.current);
 
  }
  


  return (
    <div className="container-button">
      <button className="button-nonin"  onTouchEnd={handleOnTouchEnd} onTouchStart={handleOnTouchStart} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp} onClick={handleOnClick} >
         <img alt={`${props.buttonName}`} className={action ? `nonnin-button-image-pressed` : `nonnin-button-image`} src={props.imageSource}></img>
      </button>
    </div>
  );

}

export default NonninButton;
