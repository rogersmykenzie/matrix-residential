import React from "react";
//components
import BuildFeature from "../BuildFeature/BuildFeature";
//fetch
import Axios from "axios";

function FoundationForm(props) {
    function postInfo(properties) {
        Axios.post("/info", {
            foundationInfo: {
                properties
            }
        })
    } 
    return (
        <BuildFeature 
        properties={["Basement", "Bois DArc Post", "Other", "Pier and Beam", "Pier and Beam Slab", "Pilings", "Slab"]}
        tagline="Select any that apply to your home's foundation:"
        page={props.page}
        whenClicked={postInfo}
        />
    )
}

export default FoundationForm;