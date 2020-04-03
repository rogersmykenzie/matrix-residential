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
//assets
import Logo from "../../assets/tcs_logo.svg";

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
          <div>
            <img src={Logo} className="FormPath__img--logo" />
            <h1>Welcome to the Sellers Listing Form</h1>
            <h2>Are you a seller or an agent?</h2>
          </div>
          <div className="form-path-links">
            <Link to="/welcome">
              <Button
                variant="contained"
                style={buttonStyleMain}
                onClick={handleClientClick}>
                Seller
              </Button>
            </Link>
            <Link to="/welcome">
              <Button
                variant="contained"
                style={buttonStyleMain}
                onClick={handleAdminClick}>
                Agent
              </Button>
            </Link>
          </div>
        </main>
      </Paper>
    </div>
  );
}

export default connect(undefined, { changeAuth })(FormPath);
