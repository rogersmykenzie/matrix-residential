import React from 'react';
//mui
import Button from '@material-ui/core/Button'
//inline styles
import {buttonStyleMain} from '../../styles/GlobalStyles'
//routing
import {Link} from 'react-router-dom';

/**
 * @param {String} to - The route that the button links to  
 * @param {String} whenClicked - A function to run when the butotn is clicked
 */

function NextPage(props) {
    return (
        <div onClick={props.whenClicked ? props.whenClicked : null}>
            <Link to={props.to}>
                <Button
                className='fade-in admin-page-three-button'
                style={{...buttonStyleMain, marginTop: "3vh"}}
                variant='contained'
                >
                    Next
                </Button>
            </Link>
        </div>
    )
}

export default NextPage;