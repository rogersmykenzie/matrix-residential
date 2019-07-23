import React, {useState} from 'react';
//mui
import Input from '@material-ui/core/Input';
//components
import RadioButtons from '../RadioButtons/RadioButtons';
import CheckboxComp from '../CheckboxComp/CheckboxComp';
import NextPage from '../NextPage/NextPage';
/**
 * @param {Boolean} needsInputs - A boolean stating whether inputs should be shown on the form
 * @param {Boolean} needsRadio - A boolean stating whether Radio Buttons should be shown on the form
 * @param {Boolean} needsProperties - A boolean stating whether Properties should be shown on the form
 * @param {Boolean} needsNext - A boolean stating whether a next button should be shown on the form
 * @param {Array[String]} properties - An array of all the properties for the form
 * @param {Number} room - The current room number
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
            {props.needsNext === true ?
                <span
                    onClick={() => props.whenDone({
                        level,
                        width,
                        length,
                        selectedProps
                    })}
                >
                    <NextPage 
                        to={`/page/9/${props.room + 1}`}
                        whenClicked={props.whenClicked}
                    />
                </span>
            : null}
            
        </div>
    )
}

export default BuildForm;