import React from 'react';
//mui
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
/**
 * @param {function} whenClicked - A function to run when the checkbox is clicked
 * @param {function} whenUnclicked - A function to run when the checkbox is unclicked
 * @param {string} label - The label for the checkbox. Used in the whenClicked and whenUnclicked functions.
 */

const CheckboxComp = props => {
    const [isChecked, toggle] = React.useState(false); //Holds if box is checked
    const handleChange = () => {
        toggle(!isChecked); //Toggles the checkbox in state
        if(props.whenClicked && props.whenUnclicked) { //Checks to see if comp has props
            if(!isChecked) {
                props.whenClicked(props.label); //Runs whenClicked function if it got checked
            } else {
                props.whenUnclicked(props.label); //Runs whenUnclicked if not
            }
        }
    }
    return (
        <>
            <FormControlLabel 
            control={
                <Checkbox 
                onChange={handleChange}
                />
            }
            label={props.label}
            />
        </>
    )
}

export default CheckboxComp