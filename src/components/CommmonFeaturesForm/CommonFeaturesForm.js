import React from "react";
//components
import BuildFeature from "../BuildFeature/BuildFeature";

function CommonFeaturesForm(props) {
    return (
        <BuildFeature 
        properties={["Boat Ramp", "Campground", "Club House", "Comm Sprinkler System", "Common Elevator", "Community Dock", "Community Pool", "Electric Car Charging Station", "Gated Entrance", "Golf", "Greenbelt", "Guarded Entrance", "Hangar", "Horse Facilities", "Jogging Path/Bike Path", "Landing Strip", "Laundry", "Marina", "Other", "Park", "Perimeter Fence", "Playground", "Private Lake/Pond", "Public Hangar", "Racquet Ball", "RV Parking", "Sauna", "Spa", "Tennis"]}
        tagline="Select all (if any) of the following features that apply to your home:"
        page={props.page}
        />
    )
}

export default CommonFeaturesForm;