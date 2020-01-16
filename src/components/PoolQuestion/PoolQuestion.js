import React from "react";
//components
import RadioButtons from "../RadioButtons/RadioButtons";
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import NextPage from "../NextPage/NextPage";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";

function PoolQuestion(props) {
  //state
  const [hasPool, setHasPool] = React.useState(null);
  const [selectedFeatures, setSelectedFeatures] = React.useState([]);
  //constants
  const poolFeatures = [
    "Above Ground",
    "Attached Spa",
    "Cabana",
    "Cleaning System",
    "Custom Cover",
    "Diving",
    "Heated",
    "In Ground Fiberglass",
    "In Ground Gunite",
    "In Ground Vinyl",
    "Indoor",
    "Infinity Edge",
    "Lap Pool",
    "Other",
    "Play Pool",
    "Pool Perimeter Fence",
    "Saltwater Pool",
    "Separate Spa/Hot Tub",
    "Water Feature"
  ];
  //event handlers
  function onSelection(selection) {
    if (selection === "Yes") {
      setHasPool(true);
    } else if (selection === "No") {
      setHasPool(false);
    }
  }
  function onCheck(option) {
    setSelectedFeatures([...selectedFeatures, option]);
  }
  function onUncheck(option) {
    let arr = [...selectedFeatures];
    arr.splice(arr.indexOf(option), 1);
    setSelectedFeatures([...arr]);
  }
  function postInfo() {
    Axios.post("/info", {
      poolInfo: {
        selection: hasPool,
        properties: selectedFeatures
      }
    });
  }
  //render
  return (
    <Paper className="page-two-paper">
      <h1>Do you have a pool?</h1>
      <RadioButtons buttons={["Yes", "No"]} onSelection={onSelection} />
      <br />
      {hasPool &&
        poolFeatures.map(val => (
          <CheckboxComp
            label={val}
            whenClicked={onCheck}
            whenUnclicked={onUncheck}
          />
        ))}
      {hasPool === false ||
      (hasPool === true && selectedFeatures.length > 0) ? (
        <NextPage to={`/page/${props.page + 1}`} whenClicked={postInfo} />
      ) : null}
    </Paper>
  );
}

export default PoolQuestion;
