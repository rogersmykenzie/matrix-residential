import React from "react";
//components
import CheckboxComp from "../CheckboxComp/CheckboxComp";
import NextPage from "../NextPage/NextPage";
import RadioButtons from "../RadioButtons/RadioButtons";
//mui
import Paper from "@material-ui/core/Paper";
/**
 * 
 * @prop {String|Number} page - The current page. Used for routing to next page
 * @prop {String} tagline - The prompt for the user that is displayed before the radio buttons
 * @prop {Array[String]} properties - A List of the properties/checkboxes that should show up if a user selects Yes 
 * @prop {Function} whenClicked - A function to run when the Next button is clicked
 */
function ExpoundingQuestion(props) {
    //state
    const [selectedOptions, setSelectedOptions] = React.useState([]);
    const [userSelection, setUserSelection] = React.useState(null);
    //event handlers
    function onCheck(option) {
        setSelectedOptions([...selectedOptions, option]);
    }
    function onUncheck(option) {
        let arr = [...selectedOptions];
        arr.splice(arr.indexOf(option), 1);
        setSelectedOptions([...arr]);
    }
    function onSelection(option) {
        setUserSelection(option)
    }
    //render
    return (
        <Paper className="page-two-paper">
            <h1>{props.tagline}</h1>

            <RadioButtons 
                buttons={["Yes", "No"]}
                onSelection={onSelection}
            />

            {userSelection === "Yes" && props.properties.map(val => {
                return <CheckboxComp
                    label={val}
                    whenClicked={onCheck}
                    whenUnclicked={onUncheck}
                />
            })}
            <NextPage
                to={`/page/${props.page + 1}`}
                whenClicked={() => props.whenClicked ? props.whenClicked({
                    properties: selectedOptions,
                    selection: userSelection
                }) : () => null}
            />
        </Paper>
    );
}

export default ExpoundingQuestion;