import React from 'react';
import './LoginModul.css';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './LoginModulStyles';

const LoginModul = props => {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [emailAddress, setEmailAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [verifyPassword, setVerifyPassword] = React.useState('');

    //Setup for live phone number verification and formatting
    // React.useEffect(() => {

    // }, [phone])


    return(
        <div 
        className={`login-modul${props.modulStatus}`}>
            <Paper 
            className='login-modul-paper'
            style={styles.paperStyle} 
            elevation={2}>
                <main 
                className='login-modul-paper-content'>
                    <span className='font-one'>Sign Up For An Account Today</span>
                    <span className='login-modul-line'></span>
                    <div>
                        <TextField
                        variant="outlined"
                        placeholder="First Name"
                        style={styles.textFieldStyle}
                        onChange={e => setFirstName(e.target.value)}
                        />
                        
                        <TextField
                        variant="outlined"
                        placeholder="Last Name"
                        style={styles.textFieldStyle}
                        onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField
                        variant="outlined"
                        placeholder="Email Address"
                        type="email"
                        style={styles.textFieldStyle}
                        onChange={e => setEmailAddress(e.target.value)}
                        />

                        <TextField
                        variant="outlined"
                        placeholder="Phone Number"
                        type="tel"
                        style={styles.textFieldStyle}
                        onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <TextField 
                        variant="outlined"
                        placeholder="Password"
                        type="password"
                        style={styles.textFieldStyle}
                        onChange={e => setPassword(e.target.value)}
                        />

                        <TextField 
                        variant="outlined"
                        placeholder="Verify Password"
                        type="password" 
                        style={styles.textFieldStyle}
                        onChange={e => setVerifyPassword(e.target.value)}
                        />
                    </div>

                    <div>
                        <Button
                        variant="contained"
                        style={styles.buttonStyle}
                        >
                            Sign Up
                        </Button> 
                    </div>
                </main>
            </Paper>
        </div>
    )
}

export default LoginModul;