import React from "react";
import { useSwipeable } from "react-swipeable";

import "./ClosingTouchBar.css"

function ClosingTouchBar(props) {
    
    const handlers = useSwipeable({
        onSwipedDown: (eventData) => {props.setIsClosing(true)},
        preventScrollOnSwipe: true,
        trackMouse: true,
        delta: 7,
      });

    return (
        <div {...handlers} className="bar">
        </div>
    );

}

export default ClosingTouchBar;
