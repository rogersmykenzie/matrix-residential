import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';

function HalfBathroomType(props) {
    //constants
    const PROPERTIES = ["Bidet", "Medicine Cabinet"];
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
            whenDone={formData => console.log(formData)}
        />
    )

}

export default HalfBathroomType;