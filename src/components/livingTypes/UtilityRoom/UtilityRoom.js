import React from "react";
//components
import BuildForm from "../../BuildForm/BuildForm";
//hocs
import withAuth from "../../hoc/withAuth";

function UtilityRoom(props) {
  const PROPERTIES = [
    "Built Ins",
    "Drip/dry Area",
    "Dryer Hookup - Elec",
    "Dryer Hookup - Gas",
    "Dual Sinks",
    "Dumbwaiter",
    "Farm Sink",
    "Floor Drain",
    "Full Size W/D Area",
    "Laundry Chute",
    "Linen Closet",
    "Other",
    "Recycle Bin",
    "Room For Freezer",
    "Second Pantry",
    "Second Sink",
    "Separate Room",
    "Sink in Utility",
    "Utility Closet",
    "Utility in Garage",
    "Washer Hookup"
  ];
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
    </>
  );
}

export default withAuth(UtilityRoom);
