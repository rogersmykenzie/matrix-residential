import React from "react";
//components
import RadioButtons from "../RadioButtons/RadioButtons";
import NextPage from "../NextPage/NextPage";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";


function SmartHomeQuestion(props) {
    //state
    const [userAnswer, setUserAnswer] = React.useState(null)
    //event handlers
    function postInfo() {
        Axios.post("/info", {
            smartHomeQuestion: {
                selection: userAnswer
            }
        })
    }
    //render
    return (
        <Paper className="page-two-paper"> 
            <h1>Do you have any Smart Home Features that are App or Password Dependent?</h1>
            <RadioButtons 
                buttons={["Yes", "No"]}
                onSelection={setUserAnswer}
            />
            <NextPage 
            to={`/page/${props.page + 1}`}
            whenClicked={postInfo}
            />
        </Paper>
    )
}

export default SmartHomeQuestion;