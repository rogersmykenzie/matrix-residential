import React from "react";
//components
import BuildForm from "../../BuildForm/BuildForm";
//hoc
import withAuth from "../../hoc/withAuth";

function Study(props) {
  const PROPERTIES = ["Built-Ins", "Coffee Bar"];
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
        whenDone={whenDone}
        cameFromExtraRoom={props.cameFromExtraRoom}
      />
      {/* {props.cameFromExtraRoom && <ExtraRoomNextButton resetForm={props.resetForm} />} */}
    </>
  );
}

export default withAuth(Study);
