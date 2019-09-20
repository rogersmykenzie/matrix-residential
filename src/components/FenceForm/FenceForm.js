import React from "react";
//hoc
import withSimpleForm from "../hoc/withSimpleForm";

function FenceForm(props) {
    
    return (
        <>
            <h1>Select any of the following that apply to your fence</h1>
        </>
    )
}

export default withSimpleForm(FenceForm, ["Automatic Gate", "Barbed Wire", "Brick", "Chain Link", "Cross Fenced", "Dog Run", "Iron", "Metal", "Net", "None", "Other", "Partially Fenced", "Pipe", "Rail", "Rock/Stone", "Slick/Smooth Wire", "Vinyl", "Wood"])