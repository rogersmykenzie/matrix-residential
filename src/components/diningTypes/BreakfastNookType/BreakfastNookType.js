import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';
import ExtraRoomNextButton from "../../ExtraRoomNextButton/ExtraRoomNextButton";


function BreakfastNookType(props) {
    //state
    const [formData, setFormData] = React.useState(null);
    //event handlers
    function whenDone(formData) {
        props.reset(formData);
    } 
    console.log(props)
    //constants
    const PROPERTIES = ["Breakfast", "Built Ins", "Butlers Pantry", "Coffee Bar", "Concrete Counter", "Eat-in Kitchen", "Island", "Tile Counter"];
    return (
        <>
            <BuildForm 
                needsInputs
                needsRadio
                needsProperties
                needsNext
                isRoomForm
                sectionPage={props.sectionPage}
                properties={PROPERTIES}
                room={props.roomNumber}
                cameFromExtraRoom={props.cameFromExtraRoom}
                // whenClicked={props.reset}
                whenDone={whenDone}
            />
            {/* {props.cameFromExtraRoom && <ExtraRoomNextButton resetForm={props.resetForm} />} */}
        </>
    )
}

export default BreakfastNookType;