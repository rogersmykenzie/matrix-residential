import React from "react";
//components
import BuildForm from "../../BuildForm/BuildForm";
//hoc
import withAuth from "../../hoc/withAuth";

function SecondMasterType(props) {
  const PROPERTIES = [
    "Cedar Closet",
    "Coffee Bar",
    "Custom Closet System",
    "Dual Baths",
    "Dual Sinks",
    "Fireplace",
    "Garden Tub",
    "Hollywood Bath",
    "Jetted Tub",
    "Laundry Chute",
    "Linen Closet",
    "Medicine Cabinet",
    "Separate Shower",
    "Separate Vanities",
    "Shower Body Sprays",
    "Solid Surface/Non-natural Counter",
    "Steam Shower",
    "Tile Counters"
  ];
  function whenDone(data) {
    props.reset(data);
  }
  console.log(props);
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

export default withAuth(SecondMasterType);
