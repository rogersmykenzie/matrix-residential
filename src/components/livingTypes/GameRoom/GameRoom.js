import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';

function GameRoom(props) {
    const PROPERTIES = ["Built Ins", "Other", "Unfinished Bonus Room"];

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

export default GameRoom;