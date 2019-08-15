import React from 'react';
//components
import BuildForm from '../../BuildForm/BuildForm';

function UtilityRoom(props) {
    const PROPERTIES = ["Built Ins", "Drip/dry Area", "Dryer Hookup - Elec", "Dryer Hookup - Gas", "Dual Sinks", "Dumbwaiter", "Farm Sink", "Floor Drain", "Full Size W/D Area", "Laundry Chute", "Linen Closet", "Other", "Recycle Bin", "Room For Freezer", "Second Pantry", "Second Sink", "Separate Room", "Sink in Utility", "Utility Closet", "Utility in Garage", "Washer Hookup"];

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

export default UtilityRoom;