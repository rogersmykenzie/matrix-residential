import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';
import ExtraRoomNextButton from '../../ExtraRoomNextButton/ExtraRoomNextButton';

function HalfBathroomType(props) {
    //constants
    const PROPERTIES = ["Bidet", "Medicine Cabinet"];
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
                whenDone={formData => console.log(formData)}
            />
            {props.cameFromExtraRoom && <ExtraRoomNextButton 
            resetForm={props.resetForm}
            />}
        </>
    )

}

export default HalfBathroomType;