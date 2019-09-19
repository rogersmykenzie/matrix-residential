import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import NextPage from "../NextPage/NextPage";

function FireplaceForm(props) {
    //state
    const [userFireplaceProperties, setUserFireplaceProperties] = React.useState([]);
    //constants
    const FIREPLACE_PROPERTIES = ["Blower Fan", "Brick", "Decorative", "Direct Vent", "Electric", "Freestanding", "Gas Logs", "Gas Starter", "Insert", "Masonry Box", "Metal Box", "Other", "See Through Fireplace", "Stone", "Wood Burning"];
    //event handlers
    function onCheck(option) {
        setUserFireplaceProperties([...userFireplaceProperties, option])
    }
    function onUncheck(option) {
        let arr = [...userFireplaceProperties];
        arr.splice(arr.indexOf(option), 1);
        setUserFireplaceProperties([...arr]);
    }
    //render
    return (
        <>
            <h1>Select any of the following traits that apply to your fireplace:</h1>
            {FIREPLACE_PROPERTIES.map(val => {
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

export default FireplaceForm;