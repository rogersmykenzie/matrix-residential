import React from "react";
// hoc
import withSimpleForm from "../hoc/withSimpleForm";

function EnergyEfficiencyForm(props) {
    return <h1>Does your property employ any of these energy efficiency methods?:</h1>
}

export default withSimpleForm(EnergyEfficiencyForm, ["12 inch+ attic insulation", "12-15 SEER AC", "16 SEER AC", "90% Efficient Furnace", "Attic Fan", "Ceiling Fans", "Dehumidifier", "Double Pane Windows", "Electric Water Heater", "Energy Star Appliances", "Foam Insulation", "Gas Water Heater", "High Efficiency Water Heater", "Insulated Doors", "Low E Windows", "Other", "Programmable Thermostat", "Radiant Barrier", "Smart Electric Meter", "Solar Panels", "Solar Screens", "Solar Door(s)", "Storm Window(s)", "Tankless Water Heater", "Thermos Windows",  "Tinted Windows", "Turbines", "Variable Speed HVAC", "Ventilator"], "energyEfficiencyInfo");