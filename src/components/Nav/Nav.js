import React from 'react';
import './Nav.css';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LoginModul from '../LoginModul/LoginModul';
import styles from './NavStyles';

const Nav = props => {

    const [modulStatus, setStatus] = React.useState('');

    return (
        <div>
            <AppBar 
            position='static' 
            style={styles.appBarStyle}>
                <Toolbar 
                className='nav-toolbar'>
                    <Typography 
                    variant="title" 
                    style={styles.typographyStyle}>
                        Home
                    </Typography>
                    {/* <Button
                    style={styles.buttonStyle}
                    onClick={() => setStatus(modulStatus === '-open' ? '-close' : '-open')}
                    >
                        GET STARTED
                    </Button> */}
                </Toolbar>
            </AppBar>
            <LoginModul 
            modulStatus={modulStatus} />
        </div>
    )
}

export default Nav;