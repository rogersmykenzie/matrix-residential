import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import ColumnPaper from "../ColumnPaper/ColumnPaper";
//modules
import functions from "../../modules/FunctionsModule"
import NextPage from "../NextPage/NextPage";
import Axios from "axios";

/**
 * 
 * @param {Component} Component - The Component you want to have a simple checkbox form
 * @param {Array[String|Number]} checkLabels - An array of the different labels you want for the checkboxes
 * @prop {Function} getSelectedProperties - Returns an array of all the selected properties
 */
function withSimpleForm(Component, checkLabels, infoTitle) {
    return function WithSimpleForm(props) {
        //state
        const [selectedProperties, setSelectedProperties] = React.useState([]);
        //constants
        const properties = [...checkLabels];
        // let funcCall = null;
        // const setNextPageFunction = (func) => {
        //     funcCall = func;
        //     console.log(funcCall)
        // }
        function postInfo() {
            Axios.post("/info", {
                [infoTitle]: {
                    properties: selectedProperties
                }
            })
        }
        //template
        return (
            <ColumnPaper>
                <Component 
                {...props}
                />
                {properties.map(val => (
                    <CheckboxComp 
                    label={val}
                    whenClicked={functions.createWhenClicked(selectedProperties, setSelectedProperties)}
                    whenUnclicked={functions.createWhenUnclicked(selectedProperties, setSelectedProperties)}
                    />
                ))}
                <NextPage 
                to={`/page/${props.page + 1}`}
                whenClicked={postInfo}
                />
            </ColumnPaper>
        )
    }
}

export default withSimpleForm;