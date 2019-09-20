import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
//modules
import {createWhenClicked, createWhenUnclicked} from "../../modules/FunctionsModule";
import NextPage from "../NextPage/NextPage";

function EasementsForm(props) {
    //state
    const [selectedProperties, setSelectedProperties] = React.useState([]);
    //constants
    const properties = ["Access", "Drainage", "Electric", "Natural Gas", "None", "Other", "Pipe Line", "Telephone", "Utilities", "Water Lines"];
    //template
    return (
        <>
            <h1>Select any easements that apply to your lots</h1>
            {properties.map(val => (
                <CheckboxComp 
                label={val}
                whenClicked={createWhenClicked(selectedProperties, setSelectedProperties)}
                whenUnclicked={createWhenUnclicked(selectedProperties, setSelectedProperties)}
                />
            ))}
            <NextPage 
            to={`/page/${props.page + 1}`}
            />
        </>
    )
}

export default EasementsForm;