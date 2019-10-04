import React from "react";
//components
import ExpoundingQuestion from "../ExpoundingQuestion/ExpoundingQuestion";
//fetch
import Axios from "axios";

function HandicapQuestion(props) {
    //event handlers
    function postInfo(data) {
        Axios.post("/info", {
            handicapInfo: {
                ...data
            }
        })
    } 
    //template
    return (
        <>
            <ExpoundingQuestion 
                tagline="Are there any Handicap Accessibility Features?"
                properties={["Elevator", "Hand Rails", "Lower Fixtures", "Meets ADA Requirements", "Other", "Ramp", "Wheelchair Access", "Wide Doorways"]}
                page={props.page}
                whenClicked={postInfo}
            />
        </>
    )
}

export default HandicapQuestion;