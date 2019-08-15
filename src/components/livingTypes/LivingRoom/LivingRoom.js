import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';

function LivingRoom(props) {
    const PROPERTIES = ["Built Ins"];

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
            whenDone={console.log}
        />
    )
}

export default LivingRoom;