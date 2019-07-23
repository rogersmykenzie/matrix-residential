import React, {useState} from 'react';
//mui
import Input from '@material-ui/core/Input';
//components
import RadioButtons from '../RadioButtons/RadioButtons';
import CheckboxComp from '../CheckboxComp/CheckboxComp';
/**
 * @param {Boolean} needsMeasure - Whether the form displays a measure input
 * @param {Boolean} needsLevel - Whether the form displays a level checkbox collection (1 - 3)
 * @param {Boolean} needsProperties - Whether the form displays a collection of checkbox properties
 * @param {Function} onLevelSelection - A callback for when a level is selected
 * @param {Function} onWidthChange - A callback for when a width is entered
 * @param {Function} onLengthChange - A callback for when a length is entered
 * @param {Array[String]} properties - An array of all the properties for the form
 * @param {Function} onPropAdd - A callback when a prop is checked
 * @param {Function} onPropRemove - A callback for when a prop is unchecked
 * @param {Number} room
 */
function BuildForm(props) {
    return (
        <div>
            {props.needsMeasure ? 
                <>
                    <Input 
                        placeholder='width'
                        style={{'width': '10%', 'textAlign': 'center'}}
                        type='number'
                        onChange={e => props.onWidthChange(e.target.value)}
                    />
                    <Input 
                        placeholder='length'
                        style={{'width': '10%', 'textAlign': 'center'}}
                        type='number'
                        onChange={e => props.onLengthChange(e.target.value)}
                    />
                </>
            : null}
            {props.needsLevel ?
                <RadioButtons 
                    buttons={[1,2,3]}
                    setColumn={true}
                    onSelection={props.onLevelSelection}
                />
            : null}
            {props.needsProperties ?
                props.properties.map(val => (
                    <CheckboxComp 
                        whenClicked={props.onPropAdd}
                        whenUnclicked={props.onPropRemove}
                    />
                ))
            : null}
        </div>
    )
}

export default BuildForm;