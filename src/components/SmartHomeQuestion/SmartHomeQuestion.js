import React from "react";
//components
import RadioButtons from "../RadioButtons/RadioButtons";
import NextPage from "../NextPage/NextPage";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

function SmartHomeQuestion(props) {
  //state
  const [userAnswer, setUserAnswer] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState("");
  //event handlers
  function postInfo() {
    Axios.post("/info", {
      smartHomeQuestion: {
        selection: userAnswer,
        description: userDescription
      }
    });
  }
  function handleChange(e) {
    setUserDescription(e.target.value);
  }

  //render
  return (
    <Paper className="page-two-paper">
      <h1>
        Do you have any Smart Home Features that are App or Password Dependent?
      </h1>
      <RadioButtons buttons={["Yes", "No"]} onSelection={setUserAnswer} />
      <br />
      {userAnswer === "Yes" ? (
        <TextField
          multiline
          variant="outlined"
          placeholder="Please Describe"
          rows="4"
          onChange={handleChange}
          style={{ borderColor: "green" }}
          color="secondary"></TextField>
      ) : null}
      <NextPage to={`/page/${props.page + 1}`} whenClicked={postInfo} />
    </Paper>
  );
}

export default SmartHomeQuestion;
