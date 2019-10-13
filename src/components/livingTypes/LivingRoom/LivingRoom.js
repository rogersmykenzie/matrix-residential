import React from "react";
//components
import BuildForm from "../../BuildForm/BuildForm";
//hoc
import withAuth from "../../hoc/withAuth";

function LivingRoom(props) {
  const PROPERTIES = ["Built Ins"];
  //event handlers
  function whenDone(data) {
    props.reset(data);
  }
  return (
    <>
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
        cameFromExtraRoom={props.cameFromExtraRoom}
        whenDone={whenDone}
      />
      {/* {props.cameFromExtraRoom && <ExtraRoomNextButton resetForm={props.resetForm} />} */}
    </>
  );
}

export default withAuth(LivingRoom);
