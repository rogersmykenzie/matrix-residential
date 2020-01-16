import React from "react";
//components
import BuildForm from "../BuildForm/BuildForm";
//hocs
import withAuth from "../hoc/withAuth";

function SolariumSunroom(props) {
  //event handlers
  function whenDone(data) {
    props.reset(data);
  }
  //constants
  const PROPERTIES = ["Drip/Dry Area", "Dual Sinks", "Farm Sink", "Pot Filler"];
  //render
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

export default withAuth(SolariumSunroom);
