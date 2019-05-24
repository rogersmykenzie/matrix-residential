import React, {useState, useEffect} from 'react';
//mui
import Radio from '@material-ui/core/Radio';
//css
import './RadioButtons.css'

/**
 * 
 * @param {Array} buttons - An array of the names of all the Radio Buttons
 * @param {function} onSelection - A callback function that will be passed the currently selected Radio Button each time it changes
 * @param {boolean} setColumn - States if the buttons should flow left to right or top to bottom
 */

function RadioButtons(props) {
    //state
    const [selectedButton, changeSelectedButton] = useState(null);
    
    //event handlers
    const handleChange = e => {
        changeSelectedButton(e.target.value)
        props.onSelection(e.target.value)
    }
    console.log(props)
    //radio buttons map
    const radioButtons = props.buttons ? props.buttons.map(val => (
        <React.Fragment key={val}>
            <Radio 
            checked={selectedButton === val}
            onChange={handleChange}
            value={val}
            />
            <span
            className='radio-button-text'
            //idk what this is vv
            onClick={() => handleChange({target: {value: val}})}
            value={val}
            >{val}</span>
            {props.setColumn && <br />}
        </React.Fragment>
    )) : null

    //ui
    return radioButtons
}

export default RadioButtons;