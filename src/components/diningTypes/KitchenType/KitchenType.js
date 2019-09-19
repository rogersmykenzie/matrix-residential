import React, {useState} from 'react';
import BuildForm from '../../BuildForm/BuildForm';
import ExtraRoomNextButton from '../../ExtraRoomNextButton/ExtraRoomNextButton';

function KitchenType(props) {
    const [formData, setFormData] = useState(null)
    //constants
    const PROPERTIES=["Breakfast Bar", "Built Ins", "Butlers Pantry", "Coffee Bar", "Concrete Counters", "Dual Sinks", "Eat-in Kitchen", "Farm Sink", "Galley Kitchen", "Island", "Natural Stone/Granite Counter", "Pantry", "Pot Filler", "Recycle Bin", "Room for Freezer", "Second Pantry", "Solid Surface/Non-natural Counter", "Tile Counter", "Utility in Kitchen", "Walk-in Pantry"];
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
            {props.cameFromExtraRoom && <ExtraRoomNextButton resetForm={props.resetForm} />}
        </>
    );
}

export default KitchenType;