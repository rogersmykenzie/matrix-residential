import React, { useState } from "react";
//css
import "./PageTwo.css";
//mui
import Paper from "@material-ui/core/Paper";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import NextPage from "../NextPage/NextPage";
//redux
import { connect } from "react-redux";
import {
  removeConstructionType,
  addConstructionType
} from "../../redux/formInfoReducer";
import Axios from "axios";

const PageTwo = props => {
  //state
  const [numClicked, setClicked] = useState(0);
  const [constructionTypes, setConstructionTypes] = useState([]);
  const [constructionStatus, setConstructionStatus] = useState([]);

  const isAgent = props.auth === "a";
  const construction = [
    "Block",
    "Brick",
    "Common Wall",
    "Concrete",
    "Fiber Cement",
    "Frame/Brick Trim",
    "Glass",
    "Log",
    "Metal",
    "Other",
    "Rock/Stone",
    "Siding",
    "Steel",
    "Stucco",
    "Tilt Wall",
    "Vinyl Siding",
    "Wood"
  ];
  const status = [
    "New Const - Complete",
    "New Const - Incomplete",
    "Preowned",
    "Proposed",
    "Unknown"
  ];
  //event handlers
  const setPicked = type => {
    setConstructionTypes([...constructionTypes, type]);
    setClicked(numClicked + 1);
    props.addConstructionType(type);
  };

  const setUnpicked = type => {
    let arr = [...constructionTypes];
    arr.splice(arr.indexOf(type), 1);
    setConstructionTypes(arr);
    setClicked(numClicked - 1);
    props.removeConstructionType(type);
  };

  function setPicked2(status) {
    setConstructionStatus([...constructionStatus, status]);
  }
  function setUnpicked2(status) {
    let arr = [...constructionStatus];
    arr.splice(arr.indexOf(status), 1);
    setConstructionStatus(arr);
  }
  function postData() {
    Axios.post("/info", {
      constructionTypes,
      constructionStatus
    });
  }
  return (
    <div className="container">
      <Paper className="page-two-paper">
        <div className="page-two-text-constraint">
          <h1>
            Please select the items which apply to the construction of this
            property
          </h1>
          {construction.map(val => {
            return (
              <CheckboxComp
                label={val}
                whenClicked={type => setPicked(type)}
                whenUnclicked={type => setUnpicked(type)}
              />
            );
          })}
          {numClicked && isAgent ? (
            <>
              <h1>Select a Construction Status</h1>
              {status.map(val => {
                return (
                  <CheckboxComp
                    label={val}
                    whenClicked={setPicked2}
                    whenUnclicked={setUnpicked2}
                  />
                );
              })}
            </>
          ) : null}
          <br />
          {numClicked ? (
            <NextPage to={`/page/${props.page + 1}`} whenClicked={postData} />
          ) : null}
        </div>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    constructionTypes: state.formInfoReducer.constructionTypes,
    auth: state.userReducer.auth
  };
};

export default connect(mapStateToProps, {
  removeConstructionType,
  addConstructionType
})(PageTwo);
