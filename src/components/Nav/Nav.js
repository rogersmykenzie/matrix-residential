import React from 'react';
//css
import './Nav.css';
//mui
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LoginModul from '../LoginModul/LoginModul';
//inline styling
import styles from './NavStyles';
//redux
import { connect } from 'react-redux';

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
                    <Typography
                    variant='title'
                    style={styles.typographyStyle}
                    >
                    {props.currPage ? <>
                    Step {props.currPage} of 26
                    </> : null }
                    </Typography>
                </Toolbar>
            </AppBar>
            <LoginModul 
            modulStatus={modulStatus} />
        </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Nav);