import React from "react";
//components
import BuildForm from "../BuildForm/BuildForm";
//hocs
import withAuth from "../hoc/withAuth";

function ExtraStorageRoom(props) {
  //event handler
  function whenDone(formData) {
    props.reset(formData);
  }
  //constants
  const PROPERTIES = [
    "Built Ins",
    "Drip/Dry Area",
    "Floor Drain",
    "Other",
    "Unfinished Bonus Room"
  ];

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
      cameFromExtraRoom={props.cameFromExtraRoom}
      whenDone={whenDone}
    />
  );
}

export default withAuth(ExtraStorageRoom);
