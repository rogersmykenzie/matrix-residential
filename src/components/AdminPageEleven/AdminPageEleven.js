import React, { useState, useRef } from "react";
//components
import FullBathroomType from "../bathroomTypes/FullBathroomType/FullBathroomType";
import HalfBathroomType from "../bathroomTypes/HalfBathroomType/HalfBathroomType";
//routing
import { Redirect } from "react-router-dom";
//redux
import { connect } from "react-redux";
//hoc
import withWasClickedFunctionality from "../hoc/withWasClickedFunctionality/withWasClickedFunctionality";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function AdminPageEleven(props) {
  //state
  const [selectedOption, setOption] = useState(null);
  const [formData, setFormData] = useState([]);
  //refs
  const selectNode = useRef();
  //redirect
  if (props.room > props.numBathrooms) {
    Axios.post("/info", {
      bathroomData: formData
    });
    return <Redirect to={`/page/${props.page + 1}`} />;
  }
  //event handlers
  function reset(data) {
    setFormData([
      ...formData,
      {
        ...data,
        type: selectedOption
      }
    ]);
    selectNode.current.value = "none";
    props.setWasClicked(false);
    setOption(null);
  }
  //pass-down props
  const componentProps = {
    reset,
    roomNumber: props.room,
    sectionPage: props.page
  };
  //component decider
  let currentForm = (function() {
    switch (selectedOption) {
      case "full-bathroom":
        return <FullBathroomType {...componentProps} />;
      case "half-bathroom":
        return <HalfBathroomType {...componentProps} />;
      default:
        return null;
    }
  })();
  //render
  return (
    <Paper className="intro-paper">
      <h1>Enter Bathroom {props.room ? props.room : null}</h1>
      <Select
        ref={selectNode}
        value={selectedOption}
        onChange={e => {
          setOption(e.target.value);
        }}>
        <MenuItem value="full-bathroom">Full Bathroom</MenuItem>
        <MenuItem value="half-bathroom">Half Bathroom</MenuItem>
      </Select>
      {currentForm}
    </Paper>
  );
}

function mapStateToProps(reduxState) {
  const { numFullBath, numHalfBath } = reduxState.formInfoReducer.numRooms;
  return {
    numBathrooms: numFullBath + numHalfBath
  };
}

export default connect(mapStateToProps)(
  withWasClickedFunctionality(AdminPageEleven)
);
