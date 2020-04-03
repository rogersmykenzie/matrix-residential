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
    <Paper className="intro-paper">
      <h1>Please select any flooring type this property has:</h1>
      <div className="checkbox__container">
        {properties.map(val => {
          return (
            <CheckboxComp
              label={val}
              whenClicked={onCheck}
              whenUnclicked={onUncheck}
            />
          );
        })}
      </div>
      {selectedProperties.length > 0 ? (
        <NextPage to={`/page/${props.page + 1}`} whenClicked={postInfo} />
      ) : null}
    </Paper>
  );
}

export default FlooringForm;
