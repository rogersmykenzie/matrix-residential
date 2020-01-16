import React from "react";
// hoc
import withSimpleForm from "../hoc/withSimpleForm";

function SoilForm(props) {
  return <h1>Select if you know what type of soil this property has.</h1>;
}

export default withSimpleForm(
  SoilForm,
  [
    "Black",
    "Clay",
    "Fill",
    "Limestone",
    "Other",
    "Rock/Shale",
    "Shady Loam",
    "Unknown"
  ],
  "soilInfo"
);
