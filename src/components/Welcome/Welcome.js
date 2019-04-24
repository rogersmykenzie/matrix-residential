import React from 'react';
//mui imports
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
//css imports
import './Welcome.css';
//inline styles import
import styles from './WelcomeStyles';
//routing
import { Link } from 'react-router-dom';

const Welcome = props => {
    return(
        <div
        className='welcome-container'
        >
            <Paper
            className='welcome-paper'
            >
                <h1>Thanks for that! We can now get started on the important bits</h1>
                <Link to='/page/1'>
                    <Button
                    variant='contained'
                    style={styles.buttonStyle}
                    >
                        Proceed
                    </Button>
                </Link>
            </Paper>
        </div>
    )
}

export default Welcome;