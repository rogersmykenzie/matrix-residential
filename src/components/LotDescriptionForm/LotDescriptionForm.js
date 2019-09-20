import React from "react";
//hoc
import withSimpleForm from "../hoc/withSimpleForm";

function LotDescriptionForm(props) {
    return (
        <>
            <h1>Select any of the following that pertain to your lot:</h1>
            <button
            onClick={() => console.log(props.getSelectedProperties())}
            >Get Selections</button>
        </>
    )
}

export default withSimpleForm(LotDescriptionForm, ["Acreage", "Adjacent to Greenbelt", "Airstrip", "Canal (Man Made)", "Corner", "Creek", "Cul De Sac", "Cultivated", "Golf Course Lot", "Greenbelt", "Heavily Treed", "Horses Permitted", "Interior Lot", "Irregular", "Landscaped", "Leasehold", "Large Backyard Grass", "No Backyard Grass", "Park View", "Partially Cultivated", "Pasture", "River Front", "Some Trees", "Subdivision", "Tank/Pond", "Taxi-way", "Undivided", "Water/Lake View"]);