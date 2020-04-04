import React from "react";
import BuildForm from "../../BuildForm/BuildForm";
//hocs
import withAuth from "../../hoc/withAuth";

function KitchenType(props) {
  // const [formData, setFormData] = useState(null);
  //constants
  const PROPERTIES = [
    "Breakfast Bar",
    "Built Ins",
    "Butlers Pantry",
    "Coffee Bar",
    "Concrete Counters",
    "Dual Sinks",
    "Eat-in Kitchen",
    "Farm Sink",
    "Galley Kitchen",
    "Island",
    "Natural Stone/Granite Counter",
    "Pantry",
    "Pot Filler",
    "Recycle Bin",
    "Room for Freezer",
    "Second Pantry",
    "Solid Surface/Non-natural Counter",
    "Tile Counter",
    "Utility in Kitchen",
    "Walk-in Pantry"
  ];
  //event handers
  function whenDone(data) {
    props.reset(data);
  }
  //template
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

export default withAuth(KitchenType);
