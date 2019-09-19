import React from "react";
//copmponents
import BuildFeature from "../BuildFeature/BuildFeature";

function FoundationForm(props) {
    return (
        <BuildFeature 
        properties={["Basement", "Bois DArc Post", "Other", "Pier and Beam", "Pier and Beam Slab", "Pilings", "Slab"]}
        tagline="Select any that apply to your home's foundation:"
        page={props.page}
        />
    )
}

export default FoundationForm;