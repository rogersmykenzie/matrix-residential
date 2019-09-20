import React from "react";
// hoc
import withSimpleForm from "../hoc/withSimpleForm";

function StreetUtilitiesForm(props) {

    return (
        <h1>Select any of the following that apply to your street/property utilities:</h1>
    )
}   

export default withSimpleForm(StreetUtilitiesForm, ["Aerobic Septic", "All Weather Road", "Alley", "Asphalt", "City Sewer", "City Water", "Co-op Membership Included", "Co-op Water", "Community Mailbox", "Concrete", "Curbs", "Dirt", "Gravel/Rock", "Individual Gas Meter", "Individual Water Meter", "Master Gas Meter", "Master Water Meter", "MUD Sewer", "MUD Water", "No City Services", "No Sewer", "No Water", "None", "Other", "Outside City Limits", "Overhead Utilities", "Private Road", "Private Sewer", "Private Water", "Septic", "Sewer Tap Fee Paid", "Sidewalk", "Underground Utilities", "Unincorporated", "Water Tap Fee Paid"]);