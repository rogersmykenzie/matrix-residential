import React from "react";
// hoc
import withSimpleForm from "../hoc/withSimpleForm";

function ExteriorFeaturesForm(props) {
    return (
        <h1>Select any external features that apply to your property</h1>
    )
}

export default withSimpleForm(ExteriorFeaturesForm, ["Arena", "Other", "Attached Grill", "Balcony", "Covered Deck", "Covered Porch(es)", "Deck", "Equestrian Center", "Gardens", "Gazebo/Pergola", "Greenhouse", "Guest Quarters", "Gutters", "Holding Pens", "Lighting System", "Mosquito Mist System", "Outdoor Fireplace/Pit", "Outdoor Living Center", "Patio Covered", "Patio Open", "Private Hangar", "Private Landing Strip", "Private Outdoor Space", "Roof Top Deck/Patio", "Round Pens", "RV/Boat Parking", "Satellite Dish", "Separate Entry Quarters", "Sport Court", "Sprinkler System", "Stable/Barn", "Storage Building", "Storm Cellar", "Tennis Court(s)", "Workshop", "Workshop With Electric"], "exteriorFeaturesInfo");