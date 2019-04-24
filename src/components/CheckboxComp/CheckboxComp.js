import React from 'react';
//mui
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckboxComp = props => {
    return (
        <>
            <FormControlLabel 
            control={
                <Checkbox 
                onChange={() => props.whenClicked()}
                />
            }
            label={props.label}
            />
        </>
    )
}

export default CheckboxComp