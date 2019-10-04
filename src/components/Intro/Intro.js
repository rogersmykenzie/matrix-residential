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
//fetch
import axios from "axios";

const Intro = props => {
    //state
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [address, setAddress] = React.useState("");
    //didMount
    React.useEffect(() => {
        axios.post("/start")
    }, [])
    
    //event handlers
    function postOnClick(auth) {
        console.log("here")
        axios.post("/info", {
            firstName,
            lastName,
            email,
            phone,
            address,
            auth
        })
    }

    function handleAdminClick() {
        props.changeAuth('c')
        postOnClick("Client")
    }

    function handleClientClick() {
        props.changeAuth('a')
        postOnClick("Agent")
    }
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
                        onChange={e => {
                            props.changeFirstName(e.target.value)
                            setFirstName(e.target.value)
                        }}
                    />

                    <TextField
                        variant='outlined'
                        placeholder='Last Name'
                        style={styles.textFieldStyle}
                        onChange={e => {
                            props.changeLastName(e.target.value)
                            setLastName(e.target.value)
                        }}
                    />

                    <TextField
                        variant='outlined'
                        placeholder='Email'
                        style={styles.textFieldStyle}
                        onChange={e => {
                            props.changeEmail(e.target.value)
                            setEmail(e.target.value)
                        }}
                    />

                    <TextField
                        variant='outlined'
                        placeholder='Phone Number'
                        style={styles.textFieldStyle}
                        onChange={e => {
                            props.changePhoneNumber(e.target.value)
                            setPhone(e.target.value)
                        }}
                    />

                    <TextField
                        variant='outlined'
                        placeholder="Address"
                        style={styles.textFieldStyle}
                        onChange={e => {
                            props.updateAddress(e.target.value)
                            setAddress(e.target.value)
                        }}
                    />
                    <div>
                        <Link to='/welcome'>
                            <Button
                                variant="contained"
                                style={styles.buttonStyle}
                                onClick={handleAdminClick}
                            >
                                Continue as Client
                            </Button>
                        </Link>
                        <Link to='/welcome'>
                            <Button
                                variant="contained"
                                style={styles.buttonStyle}
                                onClick={handleClientClick}
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