import React from "react";
import BuildForm from "../BuildForm/BuildForm";
import ExtraRoomNextButton from "../ExtraRoomNextButton/ExtraRoomNextButton";

function OtherForm(props) {
    return (
        <>
            <input placeholder="Room Name" />
            <h1>Insert any info you need to note about this room: </h1>
            <textarea></textarea>
            <ExtraRoomNextButton 
                resetForm={props.resetForm}
            />
        </>
    )
}

export default OtherForm;