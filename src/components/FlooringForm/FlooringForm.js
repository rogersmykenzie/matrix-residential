import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import NextPage from "../NextPage/NextPage";
//fetch
import Axios from "axios";
//mui
import Paper from "@material-ui/core/Paper";

function FlooringForm(props) {
  //state
  const [selectedProperties, setSelectedProperties] = React.useState([]);
  //constants
  const properties = [
    "Brick/Adobe",
    "Carpet",
    "Ceramic Tile",
    "Concrete",
    "Laminate",
    "Luxury Vinyl Plank",
    "Marble",
    "Other",
    "Parquet",
    "Slate",
    "Stone",
    "Terrazzo",
    "Vinyl",
    "Wood",
    "Wood Under Carpet"
  ];
  //event handlers
  function onCheck(option) {
    setSelectedProperties([...selectedProperties, option]);
  }
  function onUncheck(option) {
    let arr = [...selectedProperties];
    arr.splice(arr.indexOf(option), 1);
    setSelectedProperties([...arr]);
  }
  function postInfo() {
    Axios.post("/info", {
      flooringInfo: {
        properties: selectedProperties
      }
    });
  }
  //render
  return (
    <Paper className="page-two-paper">
      <h1>Please select all that apply to your flooring:</h1>
      {properties.map(val => {
        return (
          <CheckboxComp
            label={val}
            whenClicked={onCheck}
            whenUnclicked={onUncheck}
          />
        );
      })}
      {selectedProperties.length > 0 ? (
        <NextPage to={`/page/${props.page + 1}`} whenClicked={postInfo} />
      ) : null}
    </Paper>
  );
}

export default FlooringForm;
