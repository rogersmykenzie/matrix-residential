import React from "react";
//components
import BuildFeature from "../BuildFeature/BuildFeature";
//fetch
import Axios from "axios";

function ParkingFeaturesForm(props) {
    function postInfo(properties) {
        Axios.post("/info", {
            parkingInfo: {
                properties
            }
        })
    }
    //render
    return (
        <BuildFeature
        properties={["Area Assigned", "Assigned Garage", "Assigned Spaces", "Attached", "Circle Drive", "Common Garage", "Common Lot", "Covered", "Detached", "Epoxy Flooring", "Fence Assigned Lot", "Fenced Open Lot", "Front", "Garage", "Garage Conversion", "Garage Door Opener", "Garage Under Building", "Golf Cart Garage", "Has Sink in Garage", "Individual Carport", "None", "On Street", "Open", "Open and Unassigned Garage", "Opener", "Other", "Other Parking/Garage", "Outside Entry", "Oversized", "Pay Parking Garage", "Pay Parking Lot", "Porte-Cochere", "Rear", "Shared Carport", "Shared Garage", "Side", "Swing Drive", "Tandem Style", "Unassigned Spaces", "Uncovered", "Valet", "Workbench"]}
        tagline="Select any that are pertinent to your parking situation:"
        page={props.page}
        whenClicked={postInfo}
        />
    )
}

export default ParkingFeaturesForm;