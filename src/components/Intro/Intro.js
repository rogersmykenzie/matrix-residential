import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import styles from './IntroStyles'
import './Intro.css';

const Intro = props => {
    return (
        <div 
        className='intro-container'
        >
            <Paper
            className='intro-paper'
            >
                <h1>Welcome to Matrix Residential Online</h1>
                <h1>To get started, we just need a bit of info:</h1>
                <div
                className='intro-text-field-container'
                >
                    <TextField
                    variant='outlined'
                    placeholder='First Name'
                    style={styles.textFieldStyle}
                    />

                    <TextField 
                    variant='outlined'
                    placeholder='Last Name'
                    style={styles.textFieldStyle}
                    />

                    <TextField 
                    variant='outlined'
                    placeholder='Email'
                    style={styles.textFieldStyle}
                    />

                    <TextField
                    className='text-field'
                    variant='outlined'
                    placeholder='Phone Number'
                    style={{...styles.textFieldStyle}}
                    />

                    
                </div>
            </Paper>
        </div>
    )
}

export default Intro;