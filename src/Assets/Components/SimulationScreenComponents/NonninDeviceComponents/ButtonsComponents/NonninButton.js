import React, { useEffect, useRef, useState } from "react";
import "./NonninButton.css"

function NonninButton(props) {
  const [action, setAction] = useState();
  const timerRef = useRef();
  const longPress = useRef();


  useEffect(()=>{
    if(!props.isLongPress){
      setTimeout(()=>{
        setAction(false)
        longPress.current = false}, 500)
      
    }
  }, [props.isLongPress])


  function startPressTimer() {
    longPress.current = false;
    timerRef.current = setTimeout(() => {
      longPress.current = true;
      setAction(true);
    }, 500)
  }

  function handleOnClick(e) {
    console.log('handleOnClick');
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
  }

  function handleOnMouseUp() {
    clearTimeout(timerRef.current);
  }

  function handleOnTouchStart() {
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
