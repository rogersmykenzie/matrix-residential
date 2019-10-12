import React from "react";
//components
import BuildForm from "../../BuildForm/BuildForm";
//hoc
import withAuth from "../../hoc/withAuth";

function HalfBathroomType(props) {
  //constants
  const PROPERTIES = ["Bidet", "Medicine Cabinet"];
  //event handlers
  function whenDone(data) {
    props.reset(data);
  }
  return (
    <>
      <BuildForm
        needsInputs
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
    </>
  );
}

export default withAuth(HalfBathroomType);
