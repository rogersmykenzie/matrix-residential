import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';
import ExtraRoomNextButton from '../../ExtraRoomNextButton/ExtraRoomNextButton';

function HalfBathroomType(props) {
    //constants
    const PROPERTIES = ["Bidet", "Medicine Cabinet"];
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
                whenDone={whenDone}
                cameFromExtraRoom={props.cameFromExtraRoom}
            />
            {/* {props.cameFromExtraRoom && <ExtraRoomNextButton 
            resetForm={props.resetForm}
            />} */}
        </>
    )

}

export default HalfBathroomType;