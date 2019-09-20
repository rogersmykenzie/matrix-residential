import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import RadioButtons from "../RadioButtons/RadioButtons";
import NextPage from "../NextPage/NextPage";
function WaterfrontQuestion(props) {
    //state
    const [isWaterfront, setIsWaterfront] = React.useState(null);
    const [isLakefront, setIsLakefront] = React.useState(null);
    const [dockIsPermitted, setDockIsPermitted] = React.useState(null);
    const [selectedFeatures, setSelectedFeatures] = React.useState([]);
    //constants
    const waterfrontFeatures = ["Boat Dock With Lift", "Boat Dock With Slip", "Canal (man made)", "Dock - Covered", "Dock - Enclosed", "Dock - Uncovered", "Lakefront", "Lakefront - Common Area", "Lakefront - Corps of Engineers", "Lakefront - Main Body", "Leasehold", "Personal Watercraft Lift", "Retaining Wall - Concrete", "Retaining Wall - Other", "Retaining Wall - Steel", "Retaining Wall - Wood", "Riverfront", "Waterboard Authority - HOA", "Waterboard Authority - Private" ]
    //event handlers
    function whenChecked(option) {
        setSelectedFeatures([...selectedFeatures, option]);
    }

    function whenUnchecked(option) {
        let arr = [...selectedFeatures];
        arr.splice(arr.indexOf(option), 1);
        setSelectedFeatures([...arr])
    }
    //template
    return (
        <>
            <h1>Is this a waterfront property?</h1>
            <RadioButtons 
            buttons={["Yes", "No"]}
            onSelection={setIsWaterfront}
            />
            <h1>Is this a lakefront property?</h1>
            <RadioButtons 
            buttons={["Yes", "No"]}
            onSelection={setIsLakefront}
            />
            <h1>Is a dock permitted?</h1>
            <RadioButtons 
            buttons={["Yes", "No"]}
            onSelection={setDockIsPermitted}
            />
            {waterfrontFeatures.map(val => {
                return <CheckboxComp 
                label={val}
                whenClicked={whenChecked}
                whenUnclicked={whenUnchecked}
                />
            })}

            <NextPage 
            to={`/page/${props.page + 1}`}
            />
        </>
    )
}

export default WaterfrontQuestion;