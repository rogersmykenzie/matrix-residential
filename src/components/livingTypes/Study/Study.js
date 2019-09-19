import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';
import ExtraRoomNextButton from '../../ExtraRoomNextButton/ExtraRoomNextButton';

function Study(props) {
    const PROPERTIES = ["Built-Ins", "Coffee Bar"];
    return (
        <>
            <BuildForm 
                needsInputs
                needsRadio
                needsProperties
                needsNext={!props.cameFromExtraRoom}
                sectionPage={props.sectionPage}
                properties={PROPERTIES}
                room={props.roomNumber}
                whenClicked={props.reset}
                whenDone={console.log}
            />
            {props.cameFromExtraRoom && <ExtraRoomNextButton resetForm={props.resetForm} />}
        </>
    )
}

export default Study;