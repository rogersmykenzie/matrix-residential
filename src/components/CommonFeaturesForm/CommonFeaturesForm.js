import React from "react";
//components
import BuildFeature from "../BuildFeature/BuildFeature";
//fetch
import Axios from "axios";

function CommonFeaturesForm(props) {
  function postInfo(properties) {
    Axios.post("/info", {
      commonFeaturesInfo: {
        properties
      }
    });
  }
  return (
    <BuildFeature
      properties={[
        "Boat Ramp",
        "Campground",
        "Club House",
        "Comm Sprinkler System",
        "Common Elevator",
        "Community Dock",
        "Community Pool",
        "Electric Car Charging Station",
        "Gated Entrance",
        "Golf",
        "Greenbelt",
        "Guarded Entrance",
        "Hangar",
        "Horse Facilities",
        "Jogging Path/Bike Path",
        "Landing Strip",
        "Laundry",
        "Marina",
        "Other",
        "Park",
        "Perimeter Fence",
        "Playground",
        "Private Lake/Pond",
        "Public Hangar",
        "Racquet Ball",
        "RV Parking",
        "Sauna",
        "Spa",
        "Tennis",
        "None"
      ]}
      tagline="Please select any of these Community Features that may apply to your neighborhood:"
      page={props.page}
      whenClicked={postInfo}
    />
  );
}

export default CommonFeaturesForm;
