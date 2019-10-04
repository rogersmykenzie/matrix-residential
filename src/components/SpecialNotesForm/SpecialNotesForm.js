import React from "react";
import BuildFeature from "../BuildFeature/BuildFeature";
//fetch
import Axios from "axios";

function SpecialNotesForm(props) {
    function postInfo(properties) {
        Axios.post("/info", {
            specialNoteInfo: {
                properties
            }
        })
    }
    //render
    return (
        <BuildFeature 
        properties={["Aerial Photo", "Affordable Housing", "Built to Suit", "Deed Restrictions", "Deep Hole Test", "Environ. Study Complete", "Feasibility Study Avail", "Flood Plain", "Flowage Easement", "Highline", "Historical", "HUD", "Inland/Wetland Restrict", "Meets ADA Guidelines", "Other", "Owner/Agent", "Perc Test", "Phase I Complete", "Phase II Complete", "Pipeline", "Res Service Contract", "Right of First Refusal", "Section 8 Qualified", "Special Assessments", "Special Contracts/Provisions", "Survey Available", "Utility Easement", "Verify Flood Insurance", "Verify Rollback Tax", "Verify Tax Exemptions"]}
        tagline="Check the boxes of any notes that are applicable to your property"
        page={props.page}
        whenClicked={postInfo}
        />
    )
}

export default SpecialNotesForm;