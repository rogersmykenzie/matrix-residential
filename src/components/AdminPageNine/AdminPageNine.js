import React, { useState, useRef } from "react";
//components
import DiningRoomType from "../diningTypes/DiningRoomType/DiningRoomType";
import KitchenType from "../diningTypes/KitchenType/KitchenType";
import BreakfastNookType from "../diningTypes/BreakfastNookType/BreakfastNookType";
import PageStart from "../PageStart/PageStart";
//redux
import { connect } from "react-redux";
//routing
import { Redirect } from "react-router-dom";
//mui
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
//fetch
import Axios from "axios";

function AdminPageNine(props) {
  //state
  const [selectOption, setOption] = useState(null);
  const [formData, setFormData] = useState([]);
  //refs
  const selectNode = useRef();
  //event handlers
  function reset(data) {
    setFormData([
      ...formData,
      {
        ...data,
        type: selectOption
      }
    ]);
    selectNode.current.value = "none";
    setOption(null);
  }
  //redirect
  if (props.room > props.numDining) {
    Axios.post("/info", {
      diningData: formData
    });
    return <Redirect to={`/page/${props.page + 1}`} />;
  }
  //pass-down props
  const componentProps = {
    reset,
    roomNumber: props.room,
    sectionPage: props.page
  };
  //component decider
  let currentForm = (function() {
    switch (selectOption) {
      case "dining-room":
        return <DiningRoomType {...componentProps} />;
      // case "kitchen":
      //   return <KitchenType {...componentProps} />;
      case "breakfast-nook":
        return <BreakfastNookType {...componentProps} />;
      default:
        return null;
    }
  })();
  //render
  return (
    <PageStart>
      <h1>Enter Dining Area {props.room}</h1>
      <Select
        value={selectOption}
        ref={selectNode}
        onChange={e => setOption(e.target.value)}>
        <MenuItem value="none">- Select an Option -</MenuItem>
        <MenuItem value="dining-room">Dining Room</MenuItem>
        {/* <MenuItem value="kitchen">Kitchen</MenuItem> */}
        <MenuItem value="breakfast-nook">Breakfast Nook</MenuItem>
      </Select>
      {currentForm}
    </PageStart>
  );
}

function mapStateToProps(reduxState) {
  return {
    numDining: reduxState.formInfoReducer.numRooms.numDining
  };
}

export default connect(mapStateToProps)(AdminPageNine);
