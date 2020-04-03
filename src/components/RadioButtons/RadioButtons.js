import React, { useState } from "react";
//mui
import Radio from "@material-ui/core/Radio";
//css
import "./RadioButtons.css";

/**
 * @prop {Array} buttons - An array of the names of all the Radio Buttons
 * @prop {Function} onSelection - A callback function that will be passed the currently selected Radio Button each time it changes
 * @prop {Boolean} setColumn - States if the buttons should flow left to right or top to bottom
 */

function RadioButtons(props) {
  //state
  const [selectedButton, changeSelectedButton] = useState(null);

  //event handlers
  const handleChange = e => {
    changeSelectedButton(e.target.value);
    props.onSelection(e.target.value);
  };
  //radio buttons map
  const radioButtons = props.buttons
    ? props.buttons.map(val => (
        <div className="radioButton" key={val}>
          <Radio
            checked={selectedButton === val}
            onChange={handleChange}
            value={val}
          />
          <span
            className="radio-button-text"
            //idk what this is; its 2am and im dumb
            onClick={() => handleChange({ target: { value: val } })}
            value={val}>
            {val}
          </span>
          {props.setColumn && <br />}
        </div>
      ))
    : null;

  //ui
  return <div className="radioButtons__container">{radioButtons}</div>;
}

export default RadioButtons;
