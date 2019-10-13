import React from "react";

import BuildForm from "../../BuildForm/BuildForm";
//hoc
import withAuth from "../../hoc/withAuth";

function DiningRoomTypes(props) {
  const PROPERTIES = ["Built Ins", "Butlers Pantry", "Dumbwaiter"];

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
export default withAuth(DiningRoomTypes);
