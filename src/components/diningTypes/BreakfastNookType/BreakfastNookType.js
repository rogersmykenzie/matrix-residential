import React from "react";
//components
import BuildForm from "../../BuildForm/BuildForm";
//hoc
import withAuth from "../../hoc/withAuth";

function BreakfastNookType(props) {
  //state
  const [formData, setFormData] = React.useState(null);
  //event handlers
  function whenDone(formData) {
    props.reset(formData);
  }
  //constants
  const PROPERTIES = [
    "Breakfast Bar",
    "Built Ins",
    "Butlers Pantry",
    "Coffee Bar",
    "Concrete Counter",
    "Eat-in Kitchen",
    "Island",
    "Tile Counter"
  ];
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
        cameFromExtraRoom={props.cameFromExtraRoom}
        // whenClicked={props.reset}
        whenDone={whenDone}
      />
      {/* {props.cameFromExtraRoom && <ExtraRoomNextButton resetForm={props.resetForm} />} */}
    </>
  );
}

export default withAuth(BreakfastNookType);
