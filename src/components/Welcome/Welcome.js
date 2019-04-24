import React from 'react';
//mui imports
import Paper from '@material-ui/core/Paper';
//css imports
import './Welcome.css';

const Welcome = props => {
    return(
        <div
        className='welcome-container'
        >
            <Paper
            className='welcome-paper'
            >
            <h1>Thanks for that! We can now get started on the important bits</h1>
            
            </Paper>
        </div>
    )
}

export default Welcome;