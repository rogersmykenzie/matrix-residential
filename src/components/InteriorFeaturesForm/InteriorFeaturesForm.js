import React from "react";
import BuildForm from "../BuildForm/BuildForm";
import NextPage from "../NextPage/NextPage"

function InteriorFeaturesForm(props) {
    console.log(props);
    ///constants
    const PROPERTIES = ["Bay Windows", "Built-In Wine Cooler", "Cable TV Available", "Central Vac", "Decorative Lighting", "Dry Bar", "Electric Shades", "Elevator", "Flat Screen Wiring", "High Speed Internet Avail", "Intercom", "Loft", "Multiple Staircases", "Other", "Paneling", "Plantation Shutters", "Skylights", "Smart Home System", "Sound System Wiring", "Vaulted Ceilings", "Wainscoting", "Water Filter", "Water Purifier", "Water Softener", "Wet Bar", "Window Coverings"]
    //render
    return (
        <>
            <h1>Check any interior features your home has:</h1>
            <BuildForm 
                needsProperties
                sectionPage={props.page}
                properties={PROPERTIES}
            />
            <NextPage
                to={`/page/${props.page + 1}`}
            />
        </>
    )
}

export default InteriorFeaturesForm; 