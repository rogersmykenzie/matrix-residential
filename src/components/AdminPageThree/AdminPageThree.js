import React, { useState } from "react";
//mui
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
//css
import "./AdminPageThree.css";
//inline styles
import styles from "./AdminPageThreeStyles";
//components
import NextPage from "../NextPage/NextPage";
import RadioButtons from "../RadioButtons/RadioButtons";
//redux
import { connect } from "react-redux";
import { setSquareFootage, setChangeReason } from "../../redux/formInfoReducer";
//fetch
import Axios from "axios";

const AdminPageThree = props => {
  //State
  const [sqFtSelection, setSqFtSelection] = useState(null);
  const [customSqFt, setCustom] = useState("");
  const [changeReason, setReason] = useState("");

  //constants
  // const changeReasons = ["Appraiser", "Building Plan", "Other", "Owner"];
  // const SAME_AS_TAX_RECORD = "Same as Tax Record";

  //Event Handlers
  // const handleRadioChange = e => {
  //   setSqFtSelection(e.target.value);
  //   if (e.target.value === SAME_AS_TAX_RECORD) {
  //     props.setSquareFootage(SAME_AS_TAX_RECORD);
  //   }
  // };

  // const handlePClick = e => {
  //   setSqFtSelection(e.target.innerText);
  //   if (e.target.innerText === SAME_AS_TAX_RECORD)
  //     props.setSquareFootage(SAME_AS_TAX_RECORD);
  // };

  const handleCustomSqFt = e => {
    setCustom(e.target.value);
    props.setSquareFootage(e.target.value);
  };

  const updateChangeReason = e => {
    setReason(e.target.value);
    props.setChangeReason(e.target.value);
  };

  const postData = () => {
    Axios.post("/info", {
      sqFtSelection,
      customSqFt,
      changeReason
    });
  };

  //UI
  return (
    <div>
      <div className="container">
        <Paper className="intro-paper">
          <h1>Is your Square Footage...?</h1>
          <form onSubmit={e => e.preventDefault()}>
            <RadioButtons
              buttons={["Same as Tax Record", "Change to:"]}
              onSelection={setSqFtSelection}
            />
            {sqFtSelection === "Change to:" ? (
              <>
                <TextField
                  onChange={handleCustomSqFt}
                  style={styles.inputStyle}
                  value={customSqFt}
                />
              </>
            ) : null}
            {sqFtSelection === "Change to:" && customSqFt !== "" ? (
              <>
                <h1 className="fade-in">What is the reason for this change?</h1>
                <TextField
                  onChange={updateChangeReason}
                  style={styles.inputStyle}
                  multiline
                  rows="4"
                  variant="outlined"
                />
              </>
            ) : null}
            <br />
            {sqFtSelection === "Same as Tax Record" ||
            (changeReason && customSqFt) ? (
              <NextPage to={`/page/${props.page + 1}`} whenClicked={postData} />
            ) : null}
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default connect(null, { setSquareFootage, setChangeReason })(
  AdminPageThree
);
