import React from "react";
//hoc
import withSimpleForm from "../hoc/withSimpleForm";

function FenceForm(props) {
  return (
    <>
      <h1>Which features apply to your fence?</h1>
    </>
  );
}

export default withSimpleForm(
  FenceForm,
  [
    "Automatic Gate",
    "Barbed Wire",
    "Brick",
    "Chain Link",
    "Cross Fenced",
    "Dog Run",
    "Iron",
    "Metal",
    "Net",
    "Other",
    "Partially Fenced",
    "Pipe",
    "Rail",
    "Rock/Stone",
    "Slick/Smooth Wire",
    "Vinyl",
    "Wood",
    "None"
  ],
  "fenceInfo"
);
