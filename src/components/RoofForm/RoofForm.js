import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import NextPage from "../NextPage/NextPage";

function RoofForm(props) {
    //state
    const [selectedRoofTypes, updateRoofTypes] = React.useState([]);
    //event handlers
    function onCheck(option) {
        updateRoofTypes([...selectedRoofTypes, option]);
    }
    function onUncheck(option) {
        let arr = [...selectedRoofTypes];
        arr.splice(arr.indexOf(option), 1);
        updateRoofTypes([...arr]);
    }
    //constants
    const roofTypes = ["Built-up", "Composition", "Concrete", "Fiber Cement", "Metal", "Other", "Overlay", "Shake Metal", "Tar/Gravel", "Tile/Slate", "Wood Shake", "Wood Shingle"];
    return (
        <>
            <h1>Select any of the following that apply to your roof:</h1>
            {roofTypes.map(val => {
                return <CheckboxComp 
                    label={val}
                    whenClicked={onCheck}
                    whenUnclicked={onUncheck}
                />
            })}
            <NextPage 
                to={`/page/${props.page + 1}`}
            />
        </>
    )
}

export default RoofForm;