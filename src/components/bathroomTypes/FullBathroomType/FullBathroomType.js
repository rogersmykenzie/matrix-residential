import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';
import ExtraRoomNextButton from '../../ExtraRoomNextButton/ExtraRoomNextButton';

function FullBathroomType(props) {
    console.log(props)
    const PROPERTIES = ["Bidet", "Built Ins", "Concrete Counters", "Double Showers", "Drip Dry Area", "Dual Master Baths", "Dual Sinks", "Garden Tub", "Hollywood Bath", "Jack & Jill Bath", "Jetted Tub", "Laundry Chute", "Linen Closet", "Medicine Cabinet", "Natural Stone/Granite Counter", "Separate Shower", "Separate Vanities", "Shower Body Sprays", "Solid Surface/Non-natural Counter", "Steam Shower", "Tile Counters"];
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

export default FullBathroomType;