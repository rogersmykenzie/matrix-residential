import React from "react";
// hoc
import withSimpleForm from "../hoc/withSimpleForm";

function HeatingCoolingForm(props) {
    return (
        <h1>Select any that apply to your heating or cooling system:</h1>
    )
}

export default withSimpleForm(HeatingCoolingForm, ["Additional Water Heater(s)", "Central Air - Electric", "Central Air - Gas", "Central Heat - Electric", "Central Heat - Gas", "Electrostatic Air Filter", "Evaporation", "Gas Jets", "Geotherm", "Heat Pump", "Humidifier", "No Air", "No Heat", "Other", "Panel/Floor/Wall", "Propane", "Solar", "Space Heater", "Window Unit", "Zoned"]);