import React from "react";
//components
import NextPage from "../NextPage/NextPage";
/**
 * 
 * @prop {Function} resetForm - A function that runs when the "Add Another" button is clicked
 */

function ExtraRoomNextButton(props) {
    return (
        <>
            <button
            onClick={() => console.log("hit") || props.resetForm()}>
                Add Another
            </button>
        </>
    )
}

export default ExtraRoomNextButton;