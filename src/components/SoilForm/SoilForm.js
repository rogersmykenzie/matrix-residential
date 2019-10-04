import React from "react";
// hoc
import withSimpleForm from "../hoc/withSimpleForm";

function SoilForm(props) {
    return (
        <h1>Select any properties that apply to your soil?</h1>
    )
}

export default withSimpleForm(SoilForm, ["Black", "Clay", "Fill", "Limestone", "Other", "Rock/Shale", "Shady Loam", "Unknown"], "soilInfo");