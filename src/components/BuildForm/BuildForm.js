import React, {useState} from 'react';
//mui
import Input from '@material-ui/core/Input';
//components
import RadioButtons from '../RadioButtons/RadioButtons';
import CheckboxComp from '../CheckboxComp/CheckboxComp';
import NextPage from '../NextPage/NextPage';
import ExtraRoomNextButton from "../ExtraRoomNextButton/ExtraRoomNextButton";
/**
 * @param {Boolean} needsInputs - A boolean stating whether inputs should be shown on the form
 * @param {Boolean} needsRadio - A boolean stating whether Radio Buttons should be shown on the form
 * @param {Boolean} needsProperties - A boolean stating whether Properties should be shown on the form
 * @param {Boolean} needsNext - A boolean stating whether a next button should be shown on the form
 * @param {Number|String} sectionPage - The current section page so the next button can route properly
 * @param {Array[String]} properties - An array of all the properties for the form
 * @param {Number} room - The current room number
 * @param {Boolean} isRoomForm - A boolean stating if this is a room form
 * @param {Function} whenClicked - A function to run when the Next button is clicked.
 * @param {Function} whenDone - A callback for when the form is submitted. It will be passed all the forms data.
 */
function BuildForm(props) {
    //state
    const [level, setLevel] = useState(null);
    const [width, setWidth] = useState(null);
    const [length, setLength] = useState(null);
    const [selectedProps, setProps] = useState([]);
    //event handlers
    function addProp(prop) {
        setProps([...selectedProps, prop]);
    }
    function removeProp(prop) {
        let arr = [...selectedProps];
        arr.splice(arr.indexOf(prop), 1);
        setProps(arr);
    }
    console.log(props.cameFromExtraRoom)
    //render
    return (
        <div>
            {props.needsInputs === true ? 
                <>
                    <Input 
                        placeholder='width'
                        style={{'width': '10%', 'textAlign': 'center'}}
                        type='number'
                        onChange={e => setWidth(e.target.value)}
                    />
                    <Input 
                        placeholder='length'
                        style={{'width': '10%', 'textAlign': 'center'}}
                        type='number'
                        onChange={e => setLength(e.target.value)}
                    />
                </>
            : null}
            {props.needsRadio === true ?
                <RadioButtons 
                    buttons={[1,2,3]}
                    setColumn={true}
                    onSelection={setLevel}
                />
            : null}
            {props.needsProperties === true ?
                props.properties.map(val => (
                    <CheckboxComp 
                        whenClicked={addProp}
                        whenUnclicked={removeProp}
                        label={val}
                    />
                ))
            : null}
            {props.needsNext === true && props.cameFromExtraRoom !== true ?
                <span
                    onClick={() => props.whenDone({
                        level,
                        width,
                        length,
                        properties: selectedProps
                    })}
                >
                    <NextPage 
                        to={props.isRoomForm ? `/page/${props.sectionPage}/${props.room + 1}` : `/page/${props.sectionPage + 1}`}
                        whenClicked={props.whenClicked ? props.whenClicked : () => null}
                    />
                </span>
            : props.needsNext === true && props.cameFromExtraRoom === true ? 
                <ExtraRoomNextButton 
                resetForm={() => props.whenDone({
                    level,
                    width,
                    length,
                    properties: selectedProps
                })}
                />
            : null}
            
        </div>
    )
}

export default BuildForm;