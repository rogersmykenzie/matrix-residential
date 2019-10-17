import React, { useState, useRef } from "react";
//mui
import Paper from "@material-ui/core/Paper";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
//components
import MasterBedroomType from "../bedroomTypes/MasterBedroomType/MasterBedroomType";
import BasicBedroomType from "../bedroomTypes/BasicBedroomType/BasicBedroomType";
import SecondMasterType from "../bedroomTypes/SecondMasterType/SecondMasterType";
//redux
import { connect } from "react-redux";
//routing
import { Redirect } from "react-router-dom";
import Axios from "axios";

//Bedroom Form
function AdminPageSeven(props) {
  const [bedroomType, setType] = useState(null);
  const [formData, setFormData] = useState([]);
  //ref
  const selectNode = useRef(null);

  console.log("MYPROPS", props.room, props.numBeds);
  if (props.room > props.numBeds) {
    Axios.post("/info", {
      bedroomData: {
        ...formData
      }
    });
    return <Redirect to={`/page/${props.page + 1}`} />;
  }

  function reset(data) {
    console.log([...formData, data]);
    setFormData([
      ...formData,
      {
        ...data,
        type: bedroomType
      }
    ]);
    setType(null);
    selectNode.current.value = "none";
  }

  const componentProps = {
    reset,
    roomNumber: props.room
  };

  let SelectedRoomForm = (function() {
    switch (bedroomType) {
      case "master":
        return MasterBedroomType;
      case "secondMaster":
        return SecondMasterType;
      case "bedroom":
        return BasicBedroomType;
      default:
        return () => null;
    }
  })();

  return (
    <div className="container">
      <Paper className="page-two-paper">
        <h1>Bedroom {props.room ? props.room : null}</h1>
        <h4>What type of bedroom is this?</h4>
        <Select
          ref={selectNode}
          value={bedroomType}
          onChange={e => setType(e.target.value)}>
          <MenuItem value="master">Master</MenuItem>
          <MenuItem value="secondMaster">Second Master</MenuItem>
          <MenuItem value="bedroom">Bedroom</MenuItem>
        </Select>
        <SelectedRoomForm {...componentProps} sectionPage={props.page} />
      </Paper>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    numBeds: state.formInfoReducer.numRooms.numBeds
  };
}

export default connect(mapStateToProps)(AdminPageSeven);
