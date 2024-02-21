import React, { useState } from "react";
import "./InputField.css"

function InputField(props) {
    const [text, setText] = useState("")

    function handleInput(event) {
        setText(event.target.value)
        props.setInput(parseInt(event.target.value))
    }
    return (
        <div className="container-input">
                <input  className="input" type="number" value={text}
                    onChange={handleInput}>
                </input>
                <span className="input-text">:{props.text}</span>
        </div>
    );

}

export default InputField;
