import React from "react";
//components
import BuildForm from "../BuildForm/BuildForm";
//hoc
import withAuth from "../hoc/withAuth";

function ExerciseRoom(props) {
  // //state
  // const [formData, setFormData] = React.useState(null);
  //event handlers
  function whenDone(formData) {
    props.reset(formData);
  }
  //constants
  const PROPERTIES = ["Built Ins", "Linen Closet", "Other", "Steam Shower"];
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

export default withAuth(ExerciseRoom);
