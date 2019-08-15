import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';

function Study(props) {
    const PROPERTIES = ["Built-Ins", "Coffee Bar"];
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

export default Study;