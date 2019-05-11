import React, {useState} from 'react';
//css
import './PageTwo.css';
//mui
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button'
//components
import CheckboxComp from '../CheckboxComp/CheckboxComp';
//inline styles
import styles from './PageTwoStyles';
//routing
import {Link} from 'react-router-dom';

const PageTwo = props => {
    const [numClicked, setClicked] = useState(0);
    const construction = ['Block', 'Brick', 'Common Wall', 'Concrete', 'Fiber Cement', 'Frame/Brick Trim', 'Glass', 'Log', 'Metal', 'Other', 'Rock/Stone', 'Siding', 'Steel', 'Stucco', 'Tilt Wall', 'Vinyl Siding', 'Wood'];

    const setPicked = type => {
        setClicked(numClicked + 1);
    }

    const setUnpicked = type => {
        setClicked(numClicked - 1)
    }

    return (
        <div className='page-one-container'>
            <Paper className="page-two-paper">
                <div className='page-two-text-constraint'>
                    <h1>Please select types of construction used in your home:</h1>
                    {construction.map(val => {
                        return <CheckboxComp
                        label={val}
                        whenClicked={type => setPicked(type)}
                        whenUnclicked={type => setUnpicked(type)}
                        />
                    })}
                    <br />
                    {numClicked ?
                    <Link to='/page/3'>
                        <Button
                        className='page-one-fade-in'
                        style={styles.buttonStyleMain}
                        variant='contained'
                        >
                            Next
                        </Button>
                    </Link> : null}
                </div>
            </Paper>
        </div>
    )
}

export default PageTwo;