import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import ColumnPaper from "../ColumnPaper/ColumnPaper";
import NextPage from "../NextPage/NextPage";
//modules
import functions from "../../modules/FunctionsModule";
//libs
import Axios from "axios";

function EasementsForm(props) {
  //state
  const [selectedProperties, setSelectedProperties] = React.useState([]);
  //constants
  const properties = [
    "Access",
    "Drainage",
    "Electric",
    "Natural Gas",
    "Other",
    "Pipe Line",
    "Telephone",
    "Utilities",
    "Water Lines",
    "None"
  ];
  //event handler
  function postInfo() {
    Axios.post("/info", {
      easementInfo: {
        properties: selectedProperties
      }
    });
  }
  //template
  return (
    <ColumnPaper>
      <h1>Select any easements that apply to your lot</h1>
      {properties.map(val => (
        <CheckboxComp
          label={val}
          whenClicked={functions.createWhenClicked(
            selectedProperties,
            setSelectedProperties
          )}
          whenUnclicked={functions.createWhenUnclicked(
            selectedProperties,
            setSelectedProperties
          )}
        />
      ))}
      <NextPage to={`/page/${props.page + 1}`} whenClicked={postInfo} />
    </ColumnPaper>
  );
}

export default EasementsForm;
