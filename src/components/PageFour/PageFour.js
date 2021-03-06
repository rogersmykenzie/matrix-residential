import React, { useState } from "react";
//mui
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import NextPage from "../NextPage/NextPage";
//redux
import { connect } from "react-redux";
import {
  addAccessoryUnit,
  removeAccessoryUnit,
  changeSchool
} from "../../redux/formInfoReducer";
//inline styles
import styles from "./PageFourStyles";
import Axios from "axios";

function PageFour(props) {
  //state
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [schoolsAreUnknown, setUnknown] = useState(null);
  const [schoolNames, dispatch] = React.useReducer(
    function (state, action) {
      switch (action.type) {
        case "elementarySchool":
          return {
            ...state,
            elementarySchool: action.payload
          };
        case "middleSchool":
          return {
            ...state,
            middleSchool: action.payload
          };
        case "highSchool":
          return {
            ...state,
            highSchool: action.payload
          };
        default:
          return state;
      }
    },
    {
      elementarySchool: "",
      middleSchool: "",
      highSchool: ""
    }
  );
  //constants
  const accessoryTypes = ["Guest Quarters", "Other", "Pool House", "None"];
  const schoolTypes = ["Elementary School", "Middle School", "High School"];
  //event handlers
  const handleClick = val => {
    setSelectedTypes([...selectedTypes, val]);
    props.addAccessoryUnit(val);
  };
  const handleUnclick = val => {
    props.removeAccessoryUnit(val);
    let arr = [...selectedTypes];
    arr.splice(arr.indexOf(val), 1);
    setSelectedTypes(arr);
  };
  const handleChange = e => {
    props.changeSchool(e.target.name, e.target.value);
    dispatch({
      type: e.target.name,
      payload: e.target.value
    });
  };
  function postData() {
    Axios.post("/info", {
      ...schoolNames,
      selectedTypes,
      schoolsAreUnknown
    });
  }
  //internal functions
  const camelCase = text =>
    text
      .split(" ")
      .map((val, i) => {
        if (i === 0) {
          return val.toLowerCase();
        } else {
          return val[0].toUpperCase() + val.substring(1).toLowerCase();
        }
      })
      .join("");

  return (
    <div className="container">
      <Paper className="intro-paper">
        <h1>Do you have any Accessory Units?</h1>
        <div className="checkbox__container">
          {accessoryTypes.map(val => {
            return (
              <CheckboxComp
                label={val}
                whenClicked={handleClick}
                whenUnclicked={handleUnclick}
              />
            );
          })}
        </div>
        {props.accessoryUnitTypes.length > 0 ? (
          <>
            <h1 className="fade-in">
              Do you know which schools this address attends?
            </h1>
            {schoolTypes.map(val => (
              <TextField
                variant="outlined"
                placeholder={val}
                name={camelCase(val)}
                className="textfield"
                style={styles.textFieldStyle}
                onChange={handleChange}
              />
            ))}
            <br />
            <CheckboxComp
              label="Unknown"
              whenClicked={() => setUnknown(true)}
              whenUnclicked={() => setUnknown(false)}
            />
            <br />
            <NextPage to={`/page/${props.page + 1}`} whenClicked={postData} />
          </>
        ) : null}
      </Paper>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    accessoryUnitTypes: state.formInfoReducer.accessoryUnitTypes,
    elementarySchool: state.formInfoReducer.elementarySchool,
    middleSchool: state.formInfoReducer.middleSchool,
    highSchool: state.formInfoReducer.highSchool
  };
};

export default connect(mapStateToProps, {
  addAccessoryUnit,
  removeAccessoryUnit,
  changeSchool
})(PageFour);
