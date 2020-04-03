import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import NextPage from "../NextPage/NextPage";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";

function FireplaceForm(props) {
  //state
  const [userFireplaceProperties, setUserFireplaceProperties] = React.useState(
    []
  );
  //constants
  const FIREPLACE_PROPERTIES = [
    "Blower Fan",
    "Brick",
    "Decorative",
    "Direct Vent",
    "Electric",
    "Freestanding",
    "Gas Logs",
    "Gas Starter",
    "Insert",
    "Masonry Box",
    "Metal Box",
    "Other",
    "See Through Fireplace",
    "Stone",
    "Wood Burning",
    "Does Not Apply"
  ];
  //event handlers
  function onCheck(option) {
    setUserFireplaceProperties([...userFireplaceProperties, option]);
  }
  function onUncheck(option) {
    let arr = [...userFireplaceProperties];
    arr.splice(arr.indexOf(option), 1);
    setUserFireplaceProperties([...arr]);
  }
  function postInfo() {
    Axios.post("/info", {
      fireplaceInfo: {
        properties: userFireplaceProperties
      }
    });
  }
  //render
  return (
    <Paper className="intro-paper">
      <h1>Select any of the following traits that apply to your fireplace:</h1>
      <div className="checkbox__container">
        {FIREPLACE_PROPERTIES.map(val => {
          return (
            <CheckboxComp
              label={val}
              whenClicked={onCheck}
              whenUnclicked={onUncheck}
            />
          );
        })}
      </div>
      <NextPage to={`/page/${props.page + 1}`} whenClicked={postInfo} />
    </Paper>
  );
}

export default FireplaceForm;
