import React from "react";
//components
import BuildForm from "../../BuildForm/BuildForm";
//hoc
import withAuth from "../../hoc/withAuth";

function BasicBedroomType(props) {
  const PROPERTIES = [
    "Built Ins",
    "Cedar Closet",
    "Custom Closet System",
    "Split Bedrooms",
    "Walk-in Closets"
  ];
  function whenDone(data) {
    props.reset(data);
  }
  return (
    <BuildForm
      needsInputs={props.auth === "a"}
      needsRadio
      needsProperties
      needsNext
      isRoomForm
      sectionPage={props.sectionPage}
      properties={PROPERTIES}
      room={props.roomNumber}
      // whenClicked={props.reset}
      whenDone={whenDone}
      cameFromExtraRoom={props.cameFromExtraRoom}
    />
  );
}

export default withAuth(BasicBedroomType);
