import React, { useCallback, useEffect, useRef, useState } from "react";
import "./NonninButton.css"
import { Await } from "react-router-dom";


function NonninButton(props) {
  const [action, setAction] = useState(false);
  const timerRef = useRef();
  const longPress = useRef();  
  const imageToUse = useRef(props.imageSource);

  const isHandleOnClickHappend = useRef();
   function resetScope() {
    setAction(false)
    longPress.current = false
    isHandleOnClickHappend.current = false
    imageToUse.current = props.imageSource
    
   }
  useEffect(()=>{
  console.log("props.isLongPress" ,props.isLongPress)
    if(!props.isLongPress){
      setTimeout(()=>{
        resetScope()
      }, 600)
    
    }
  }, [props.isLongPress])


  function startPressTimer() {
    timerRef.current =  setTimeout(() => {
    longPress.current = true;
    setAction(true);
    }, 450)
  }

  function handleOnClick  (e)   { 
    isHandleOnClickHappend.current = true
   console.log('handleOnClick'); 
   if(action){
    console.log("longpress" ,longPress.current)
   }
    if ( longPress.current ) {
      props.setIsLongPress(true);
      imageToUse.current = props.longPressImageSource
    }
    else if (!action && props.isLongPress) {
       props.setIsLongPress(false)
       return;
    } 
    props.setPressedBtn(props.buttonName)

  }

  function handleOnMouseDown(event) {
    startPressTimer();
    console.log('handleOnMouseDown');

  }

  function handleOnMouseUp() {
    console.log('handleOnMouseUp');
    if ( longPress.current === true ) return;
    clearTimeout(timerRef.current);
  }
    
  function handleOnTouchStart(event) {
    console.log('handleOnTouchStart');
    startPressTimer();
  }

  function handleOnTouchEnd() {
    console.log('handleOnTouchEnd');
    if ( longPress.current === true ) return;
    resetScope()
    clearTimeout(timerRef.current);
    }

    
 
  
  const handleContextMenu = (event) => {
    event.preventDefault()
    handleOnClick()
  };
  

  return (
    <div className="container-button"  onContextMenu={handleContextMenu}>
      <button className="button-nonin"  onTouchEnd={handleOnTouchEnd} onTouchStart={handleOnTouchStart} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp} onClick={handleOnClick} >
         <img alt={`${props.buttonName}`} className={(props.isBtnChosen(props.buttonName) && action) ? `nonnin-button-image-pressed` : `nonnin-button-image`} src={props.imageSource}></img>
      </button>
    </div>
  );

}

export default NonninButton;
