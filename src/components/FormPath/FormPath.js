import React from "react";
//mui
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
//routing
import { Link } from "react-router-dom";
//inline styles
import { buttonStyleMain } from "../../styles/GlobalStyles";
//redux
import { connect } from "react-redux";
import { changeAuth } from "../../redux/userReducer";
//css
import "./FormPath.css";
//fetch
import axios from "axios";

function FormPath(props) {
  React.useEffect(() => {
    axios.post("/start");
  }, []);

  function postOnClick(auth) {
    axios.post("/info", {
      auth
    });
  }

  function handleAdminClick() {
    props.changeAuth("a");
    postOnClick("Agent");
  }

  function handleClientClick() {
    props.changeAuth("c");
    postOnClick("Client");
  }

  return (
    <div className="intro-container">
      <Paper className="intro-paper">
        <main className="form-path">
          <Link to="/welcome">
            <Button
              variant="contained"
              style={buttonStyleMain}
              onClick={handleClientClick}>
              Continue as Client
            </Button>
          </Link>
          <Link to="/welcome">
            <Button
              variant="contained"
              style={buttonStyleMain}
              onClick={handleAdminClick}>
              Continue as Agent
            </Button>
          </Link>
        </main>
      </Paper>
    </div>
  );
}

export default connect(
  undefined,
  { changeAuth }
)(FormPath);
