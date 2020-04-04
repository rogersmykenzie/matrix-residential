import React from "react";
import BuildForm from "../BuildForm/BuildForm";
//mui
import Paper from "@material-ui/core/Paper";
import Axios from "axios";

function InteriorFeaturesForm(props) {
  ///constants
  const PROPERTIES = [
    "Bay Windows",
    "Built-In Wine Cooler",
    "Cable TV Available",
    "Central Vac",
    "Decorative Lighting",
    "Dry Bar",
    "Electric Shades",
    "Elevator",
    "Flat Screen Wiring",
    "High Speed Internet Avail",
    "Intercom",
    "Loft",
    "Multiple Staircases",
    "Other",
    "Paneling",
    "Plantation Shutters",
    "Skylights",
    "Smart Home System",
    "Sound System Wiring",
    "Vaulted Ceilings",
    "Wainscoting",
    "Water Filter",
    "Water Purifier",
    "Water Softener",
    "Wet Bar",
    "Window Coverings"
  ];
  //event handlers
  function postInfo(data) {
    for (let key in data) {
      if (data[key] === null) {
        delete data[key];
      }
    }
    Axios.post("/info", {
      interiorFeatures: data
    });
  }
  //render
  return (
    <Paper className="intro-paper">
      <h1>Check any interior features your home has:</h1>
      <BuildForm
        needsProperties
        needsNext
        waitForSelection
        isRoomForm={false}
        sectionPage={props.page}
        properties={PROPERTIES}
        whenDone={postInfo}
      />
    </Paper>
  );
}

export default InteriorFeaturesForm;
