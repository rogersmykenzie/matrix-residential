import React from "react";
//mui imports
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//inline styling import
import styles from "./IntroStyles";
//css imports
import "./Intro.css";
import "../../styles/GlobalStyles.css";
//redux imports
import { connect } from "react-redux";
import {
  changeFirstName,
  changeLastName,
  changeEmail,
  changePhoneNumber,
  updateAddress,
  changeAuth
} from "../../redux/userReducer";
//fetch
import axios from "axios";
//routing
import { Redirect } from "react-router-dom";

const Intro = props => {
  //state
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [shouldRedirect, setShouldRedirect] = React.useState(false);

  //event handlers
  function postOnClick() {
    console.log("here");
    axios.post("/info", {
      firstName,
      lastName,
      email,
      phone,
      address
    });
    setShouldRedirect(true);
  }

  function decideOption() {
    if (props.auth === "a") {
      if (address !== "") {
        postOnClick();
      } else {
        setErrorMessage("Please fill out all fields before continuing!");
      }
    }
    if (props.auth === "c") {
      const properties = [firstName, lastName, email, phone, address];
      console.log(properties);
      const filteredProps = properties.filter(val => val !== "");
      console.log(filteredProps);
      if (filteredProps.length === 5) {
        postOnClick();
      } else {
        setErrorMessage("Please fill out all fields before continuing!");
      }
    }
  }

  let inputs = [
    <TextField
      variant="outlined"
      placeholder="First Name"
      style={styles.textFieldStyle}
      onChange={e => {
        props.changeFirstName(e.target.value);
        setFirstName(e.target.value);
      }}
    />,

    <TextField
      variant="outlined"
      placeholder="Last Name"
      style={styles.textFieldStyle}
      onChange={e => {
        props.changeLastName(e.target.value);
        setLastName(e.target.value);
      }}
    />,

    <TextField
      variant="outlined"
      placeholder="Email"
      style={styles.textFieldStyle}
      onChange={e => {
        props.changeEmail(e.target.value);
        setEmail(e.target.value);
      }}
    />,

    <TextField
      variant="outlined"
      placeholder="Phone Number"
      style={styles.textFieldStyle}
      onChange={e => {
        props.changePhoneNumber(e.target.value);
        setPhone(e.target.value);
      }}
    />,

    <TextField
      variant="outlined"
      placeholder="Property Address"
      style={styles.textFieldStyle}
      onChange={e => {
        props.updateAddress(e.target.value);
        setAddress(e.target.value);
      }}
    />
  ];

  let correctForms = (function() {
    if (props.auth === "a") {
      return [inputs[4]];
    } else if (props.auth === "c") {
      return inputs;
    }
  })();

  if (shouldRedirect) {
    return <Redirect to="/page/1" />;
  }

  return (
    <div className="intro-container">
      <Paper className="intro-paper">
        <h1>To get started, please enter your contact info:</h1>
        <div className="intro-text-field-container">
          <h1 className="error-message-global">{errorMessage}</h1>
          {correctForms}

          {props.auth === "a" || props.auth === "c" ? (
            <Button
              variant="contained"
              style={styles.buttonStyle}
              onClick={decideOption}>
              Continue
            </Button>
          ) : null}
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state.userReducer.auth);
  return {
    auth: state.userReducer.auth
  };
};

export default connect(
  mapStateToProps,
  {
    changeFirstName,
    changeLastName,
    changeEmail,
    changePhoneNumber,
    updateAddress,
    changeAuth
  }
)(Intro);
