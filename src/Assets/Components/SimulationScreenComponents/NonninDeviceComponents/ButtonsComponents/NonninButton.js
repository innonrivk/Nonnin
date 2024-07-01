import React, { useRef, useState } from "react";
import "./NonninButton.css"

function NonninButton(props) {
  const [action, setAction] = useState();

  const timerRef = useRef();
  const isLongPress = useRef();

  function startPressTimer() {
    isLongPress.current = false;
    timerRef.current = setTimeout(() => {
      isLongPress.current = true;
      setAction('longpress');
    }, 500)
  }

  function handleOnClick(e) {
    console.log('handleOnClick');
    if ( isLongPress.current ) {
      props.setIsLongPress(true);
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
    if ( action === 'longpress' ) return;
    console.log('handleOnTouchEnd');
    clearTimeout(timerRef.current);
  }
  


  return (
    <div className="container-button">
      <button className="button-nonin"  onTouchEnd={handleOnTouchEnd} onTouchStart={handleOnTouchStart} onMouseDown={handleOnMouseDown} onMouseUp={handleOnMouseUp} onClick={handleOnClick} >
        <img alt={`${props.buttonName}`} className="nonnin-button-image" src={props.imageSource}></img>
      </button>
    </div>
  );

}

export default NonninButton;
