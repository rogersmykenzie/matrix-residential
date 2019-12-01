import React from "react";
// hoc
import withSimpleForm from "../hoc/withSimpleForm";

function GreenFeaturesForm(props) {
  return <h1>Select any green features that your property has:</h1>;
}

export default withSimpleForm(
  GreenFeaturesForm,
  [
    "Drought Tolerant Plants",
    "Energy Recovery Ventilator",
    "Enhanced Air Filtration",
    "ET Irrigation Control",
    "Geo-thermal HVAC",
    "Low Flow Commode",
    "Low Flow Fixtures",
    "Mechanical Fresh Air",
    "Rain/Freeze Sensors",
    "Rain Water Catchment",
    "Recirculating Hot Water",
    "Solar Electric System",
    "Solar Hot Water",
    "Wind Power",
    "None"
  ],
  "greenFeaturesInfo"
);
