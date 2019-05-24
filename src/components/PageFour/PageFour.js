import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
//checkbox
import CheckboxComp from '../CheckboxComp/CheckboxComp';

function PageFour(props) {
    //constants
    const accessoryTypes = ["Guest Quarters", "Other", "Pool House"]
    return (
        <div className='page-one-container'>
            <Paper className='page-two-paper'>
                <h1>Do you have any Accessory Units?</h1>

            </Paper>
        </div>
    )
}

export default PageFour;