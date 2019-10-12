import React from "react";
//components
import BuildForm from "../../BuildForm/BuildForm";
//hoc
import withAuth from "../../hoc/withAuth";

function FullBathroomType(props) {
  console.log(props);
  //constants
  const PROPERTIES = [
    "Bidet",
    "Built Ins",
    "Concrete Counters",
    "Double Showers",
    "Drip Dry Area",
    "Dual Master Baths",
    "Dual Sinks",
    "Garden Tub",
    "Hollywood Bath",
    "Jack & Jill Bath",
    "Jetted Tub",
    "Laundry Chute",
    "Linen Closet",
    "Medicine Cabinet",
    "Natural Stone/Granite Counter",
    "Separate Shower",
    "Separate Vanities",
    "Shower Body Sprays",
    "Solid Surface/Non-natural Counter",
    "Steam Shower",
    "Tile Counters"
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
        cameFromExtraRoom={props.cameFromExtraRoom}
        // whenClicked={props.reset}
        whenDone={whenDone}
      />
    </>
  );
}

export default withAuth(FullBathroomType);
