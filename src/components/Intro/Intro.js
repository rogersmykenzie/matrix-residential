import React from 'react'
//mui imports
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
//inline styling import
import styles from './IntroStyles'
//css import
import './Intro.css';
//redux imports
import { connect } from 'react-redux';
import {
    changeFirstName,
    changeLastName,
    changeEmail,
    changePhoneNumber,
    updateAddress,
    changeAuth
} from '../../redux/userReducer';
//routing imports
import { Link } from 'react-router-dom';

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
                        onChange={e => props.changeFirstName(e.target.value)}
                    />

                    <TextField
                        variant='outlined'
                        placeholder='Last Name'
                        style={styles.textFieldStyle}
                        onChange={e => props.changeLastName(e.target.value)}
                    />

                    <TextField
                        variant='outlined'
                        placeholder='Email'
                        style={styles.textFieldStyle}
                        onChange={e => props.changeEmail(e.target.value)}
                    />

                    <TextField
                        variant='outlined'
                        placeholder='Phone Number'
                        style={styles.textFieldStyle}
                        onChange={e => props.changePhoneNumber(e.target.value)}
                    />

                    <TextField
                        variant='outlined'
                        placeholder="Address"
                        style={styles.textFieldStyle}
                        onChange={e => props.updateAddress(e.target.value)}
                    />
                    <div>
                        <Link to='/welcome'>
                            <Button
                                variant="contained"
                                style={styles.buttonStyle}
                                onClick={() => props.changeAuth('c')}
                            >
                                Continue as Client
                            </Button>
                        </Link>
                        <Link to='/welcome'>
                            <Button
                                variant="contained"
                                style={styles.buttonStyle}
                                onClick={() => props.changeAuth('a')}
                            >
                                Continue as Agent
                            </Button>
                        </Link>
                    </div>
                </div>
            </Paper>
        </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { changeFirstName, changeLastName, changeEmail, changePhoneNumber, updateAddress, changeAuth})(Intro);