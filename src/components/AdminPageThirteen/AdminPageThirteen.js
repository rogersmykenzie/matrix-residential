import React from "react";
//redux
import { connect } from "react-redux";
//components
import Study from "../livingTypes/Study/Study";
import MediaRoom from "../livingTypes/MediaRoom/MediaRoom";
import GameRoom from "../livingTypes/GameRoom/GameRoom";
import LivingRoom from "../livingTypes/LivingRoom/LivingRoom";
import UtilityRoom from "../livingTypes/UtilityRoom/UtilityRoom";
import Error from "../Error/Error";
//routing
import { Redirect } from "react-router-dom";
//hoc
import withWasClickedFunctionality from "../hoc/withWasClickedFunctionality/withWasClickedFunctionality";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

function AdminPageThirteen(props) {
  //state
  const [option, setOption] = React.useState("none");
  const [formData, setFormData] = React.useState([]);
  //refs
  const selectNode = React.createRef();
  //redirect
  if (props.room > props.numLiving) {
    Axios.post("/info", {
      livingData: formData
    });
    return <Redirect to={`/page/${props.page + 1}`} />;
  }
  //component decider
  const CurrentForm = (function() {
    switch (option) {
      // case "study":
      //   return Study;
      case "media-room":
        return MediaRoom;
      case "game-room":
        return GameRoom;
      case "living-room":
        return LivingRoom;
      // case "utility":
      //   return UtilityRoom;
      default:
        return () => null;
    }
  })();
  //event handlers
  function reset(data) {
    setFormData([
      ...formData,
      {
        ...data,
        type: option
      }
    ]);
    selectNode.current.value = "none";
    props.setWasClicked(false);
    setOption(null);
  }
  // console.log(props);
  return (
    <Paper className="page-two-paper">
      <h1>Enter Living Room {props.room ? props.room : null}</h1>
      <Select
        ref={selectNode}
        value={option}
        onChange={e => {
          setOption(e.target.value);
        }}>
        {/* <MenuItem value="study">Study</MenuItem> */}
        <MenuItem value="media-room">Media Room</MenuItem>
        <MenuItem value="game-room">Game Room</MenuItem>
        <MenuItem value="living-room">Living Room</MenuItem>
        {/* <MenuItem value="utility">Utility Room</MenuItem> */}
      </Select>
      {
        <CurrentForm
          reset={reset}
          roomNumber={props.room}
          sectionPage={props.page}
        />
      }
    </Paper>
  );
}

function mapStateToProps(reduxState) {
  console.log(reduxState);
  return {
    numLiving: reduxState.formInfoReducer.numRooms.numLiving
  };
}

export default connect(mapStateToProps)(
  withWasClickedFunctionality(AdminPageThirteen)
);
