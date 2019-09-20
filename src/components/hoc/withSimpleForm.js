import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
//modules
import {createWhenClicked, createWhenUnclicked} from "../../modules/FunctionsModule"
import NextPage from "../NextPage/NextPage";

/**
 * 
 * @param {Component} Component - The Component you want to have a simple checkbox form
 * @param {Array[String|Number]} checkLabels - An array of the different labels you want for the checkboxes
 * @prop {Function} getSelectedProperties - Returns an array of all the selected properties
 */
function withSimpleForm(Component, checkLabels) {
    return function(props) {
        //state
        const [selectedProperties, setSelectedProperties] = React.useState([]);
        //constants
        const properties = [...checkLabels];
        //functions
        function getSelectedProperties() {
            return selectedProperties;
        }
        //template
        return (
            <>
                <Component 
                {...props}
                getSelectedProperties={getSelectedProperties}
                />
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
}

export default withSimpleForm;