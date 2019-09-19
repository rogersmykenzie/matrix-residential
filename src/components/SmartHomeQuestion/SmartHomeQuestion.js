import React from "react";
//components
import RadioButtons from "../RadioButtons/RadioButtons";
import NextPage from "../NextPage/NextPage";

function SmartHomeQuestion(props) {
    //state
    const [userAnswer, setUserAnswer] = React.useState(null)
    //render
    return (
        <> 
            <h1>Do you have any Smart Home Features that are App or Password Dependent?</h1>
            <RadioButtons 
                buttons={["Yes", "No"]}
                onSelection={setUserAnswer}
            />
            <NextPage 
            to={`/page/${props.page + 1}`}
            />
        </>
    )
}

export default SmartHomeQuestion;