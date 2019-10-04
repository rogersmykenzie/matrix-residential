import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';
import ExtraRoomNextButton from '../../ExtraRoomNextButton/ExtraRoomNextButton';

function LivingRoom(props) {
    const PROPERTIES = ["Built Ins"];
    //event handlers
    function whenDone(data) {
        props.reset(data);
    }
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
                // whenClicked={props.reset}
                cameFromExtraRoom={props.cameFromExtraRoom}
                whenDone={whenDone}
            />
            {/* {props.cameFromExtraRoom && <ExtraRoomNextButton resetForm={props.resetForm} />} */}
        </>
    )
}

export default LivingRoom;