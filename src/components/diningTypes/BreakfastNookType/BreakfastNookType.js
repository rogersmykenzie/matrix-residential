import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';


function BreakfastNookType(props) {
    //state
    const [formData, setFormData] = React.useState(null);
    console.log(props)
    //constants
    const PROPERTIES = ["Breakfast", "Built Ins", "Butlers Pantry", "Coffee Bar", "Concrete Counter", "Eat-in Kitchen", "Island", "Tile Counter"];
    return (
        <BuildForm 
            needsInputs
            needsRadio
            needsProperties
            needsNext
            sectionPage={props.sectionPage}
            properties={PROPERTIES}
            room={props.roomNumber}
            whenClicked={props.reset}
            whenDone={setFormData}
        />
    )
}

export default BreakfastNookType;