import React from "react";
//mui
import TextField from "@material-ui/core/TextField";
//styles
import NextPage from "../NextPage/NextPage";
//redux
import { connect } from "react-redux";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";

import useWindowSize from "../../utils/useWindowSize";

function FeatureTotals(props) {
  //state
  const [carportSpaces, setCarportSpaces] = React.useState("");
  const [garageSpaces, setGarageSpaces] = React.useState("");
  const [garageWidth, setGarageWidth] = React.useState("");
  const [garageLength, setGarageLength] = React.useState("");
  const [totalCoverParking, setTotalCoverParking] = React.useState("");
  const [fireplaces, setFireplaces] = React.useState("");

  const [width] = useWindowSize();
  //conditions
  let shouldShowNext = true;
  const conditionArr = [
    carportSpaces,
    garageSpaces,
    totalCoverParking,
    fireplaces
  ];
  if (props.auth === "a") {
    conditionArr.push(garageWidth);
    conditionArr.push(garageLength);
  }
  if (conditionArr.includes("")) {
    shouldShowNext = false;
  }

  const isTablet = width <= 1024;
  const isMobile = width <= 500;

  //inline styles
  const textFieldStyle = {
    width: isMobile ? "80%" : isTablet ? "50%" : "30%",
    marginBottom: "3vh"
  };
  //event handlers
  function postInfo() {
    Axios.post("/info", {
      carportSpaces,
      garageSpaces,
      garageWidth,
      garageLength,
      totalCoverParking,
      fireplaces
    });
  }
  //render
  return (
    <Paper className="intro-paper">
      <h1>Please enter the following information: </h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
        <h3># of Carport Spaces</h3>
        <TextField
          variant="outlined"
          className="carport__input"
          // placeholder="# of Carport Spaces"
          type="number__input"
          style={textFieldStyle}
          onChange={e => setCarportSpaces(e.target.value)}
        />
        <h3># of Garage Spaces</h3>
        <TextField
          variant="outlined"
          className="garage__input"
          // placeholder="# of Garage Spaces"
          type="number"
          style={textFieldStyle}
          onChange={e => setGarageSpaces(e.target.value)}
        />
        {props.auth === "a" ? (
          <>
            <h3>Garage Width</h3>
            <TextField
              variant="outlined"
              // placeholder="Garage Width"
              className="garage__input--width"
              type="text"
              style={textFieldStyle}
              onChange={e => setGarageWidth(e.target.value)}
            />
            <h3>Garage Length</h3>
            <TextField
              variant="outlined"
              // placeholder="Garage Length"
              className="garage__input--length"
              type="text"
              style={textFieldStyle}
              onChange={e => setGarageLength(e.target.value)}
            />
          </>
        ) : null}
        <h3># of Total Cover Parking Areas</h3>
        <TextField
          variant="outlined"
          // placeholder="# of Total Cover Parking Areas"
          className="total_cover_area__input"
          type="number"
          style={textFieldStyle}
          onChange={e => setTotalCoverParking(e.target.value)}
        />
        <h3># of Fireplaces</h3>
        <TextField
          variant="outlined"
          className="fireplace__input"
          // placeholder="# of Fireplaces"
          type="number"
          style={textFieldStyle}
          onChange={e => setFireplaces(e.target.value)}
        />
        {shouldShowNext ? (
          <NextPage to={`/page/${props.page + 1}`} whenClicked={postInfo} />
        ) : null}
      </div>
    </Paper>
  );
}

export default connect(state => ({
  auth: state.userReducer.auth
}))(FeatureTotals);
