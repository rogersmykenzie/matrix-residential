import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import RadioButtons from "../RadioButtons/RadioButtons";
import NextPage from "../NextPage/NextPage";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";

function WaterfrontQuestion(props) {
  //state
  const [isWaterfront, setIsWaterfront] = React.useState("");
  const [isLakefront, setIsLakefront] = React.useState("");
  const [dockIsPermitted, setDockIsPermitted] = React.useState("");
  const [selectedFeatures, setSelectedFeatures] = React.useState([]);
  //constants
  const waterfrontFeatures = [
    "Boat Dock With Lift",
    "Boat Dock With Slip",
    "Canal (man made)",
    "Dock - Covered",
    "Dock - Enclosed",
    "Dock - Uncovered",
    "Lakefront",
    "Lakefront - Common Area",
    "Lakefront - Corps of Engineers",
    "Lakefront - Main Body",
    "Leasehold",
    "Personal Watercraft Lift",
    "Retaining Wall - Concrete",
    "Retaining Wall - Other",
    "Retaining Wall - Steel",
    "Retaining Wall - Wood",
    "Riverfront",
    "Waterboard Authority - HOA",
    "Waterboard Authority - Private"
  ];
  //event handlers
  function whenChecked(option) {
    setSelectedFeatures([...selectedFeatures, option]);
  }

  function whenUnchecked(option) {
    let arr = [...selectedFeatures];
    arr.splice(arr.indexOf(option), 1);
    setSelectedFeatures([...arr]);
  }
  function postInfo() {
    Axios.post("/info", {
      waterfrontInfo: {
        isWaterfront,
        isLakefront,
        dockIsPermitted,
        properties: selectedFeatures
      }
    });
  }
  //template
  return (
    <Paper className="intro-paper">
      <h1>Is this a waterfront property?</h1>
      <RadioButtons buttons={["Yes", "No"]} onSelection={setIsWaterfront} />
      {isWaterfront === "Yes" ? (
        <div class="lakefront">
          <h1>Is this a lakefront property?</h1>
          <RadioButtons
            buttons={["Yes", "No"]}
            onSelection={setIsLakefront}
          />{" "}
        </div>
      ) : null}
      {isLakefront !== "" && isWaterfront === "Yes" ? (
        <div class="dock">
          <h1>Is a dock permitted?</h1>
          <RadioButtons
            buttons={["Yes", "No"]}
            onSelection={setDockIsPermitted}
          />
          <br />
        </div>
      ) : null}
      {dockIsPermitted !== "" && isWaterfront === "Yes" ? (
        <div className="checkbox__container">
          {waterfrontFeatures.map(val => {
            return (
              <CheckboxComp
                label={val}
                whenClicked={whenChecked}
                whenUnclicked={whenUnchecked}
              />
            );
          })}
        </div>
      ) : null}
      {(isWaterfront === "Yes" &&
        isLakefront !== "" &&
        dockIsPermitted !== "") ||
      isWaterfront === "No" ? (
        <NextPage to={`/page/${props.page + 1}`} whenClicked={postInfo} />
      ) : null}
    </Paper>
  );
}

export default WaterfrontQuestion;
