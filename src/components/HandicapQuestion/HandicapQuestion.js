import React from "react";
//components
import ExpoundingQuestion from "../ExpoundingQuestion/ExpoundingQuestion";

function HandicapQuestion(props) {
    return (
        <>
            <ExpoundingQuestion 
                tagline="Are there any Handicap Accessibility Features?"
                properties={["Elevator", "Hand Rails", "Lower Fixtures", "Meets ADA Requirements", "Other", "Ramp", "Wheelchair Access", "Wide Doorways"]}
                page={props.page}
            />
        </>
    )
}

export default HandicapQuestion;