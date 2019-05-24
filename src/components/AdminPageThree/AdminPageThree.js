import React, {useState} from 'react';
//mui
import Paper from '@material-ui/core/Paper'
import Radio from '@material-ui/core/Radio'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
//css
import './AdminPageThree.css';
//inline styles
import styles from './AdminPageThreeStyles';
import {buttonStyleMain} from '../../styles/GlobalStyles';
//components
import CheckboxComp from '../CheckboxComp/CheckboxComp';
//redux
import {connect} from 'react-redux';
import {setSquareFootage, setChangeReason} from '../../redux/formInfoReducer';
//test
import RadioButtons from '../RadioButtons/RadioButtons';
//routing
import { Link } from 'react-router-dom';

const AdminPageThree = props => {
    //State
    const [sqFtSelection, setSqFtSelection] = useState(null) 
    const [customSqFt, setCustom] = useState('');
    const [changeReason, setReason] = useState('');

    //constants
    const changeReasons = ['Appraiser', 'Building Plan', 'Other', 'Owner']
    const SAME_AS_TAX_RECORD = "Same as Tax Record"

    //Event Handlers
    const handleRadioChange = e => {
        setSqFtSelection(e.target.value)
        if(e.target.value === SAME_AS_TAX_RECORD) {
            props.setSquareFootage(SAME_AS_TAX_RECORD);
        }
    }

    const handlePClick = e => {
        setSqFtSelection(e.target.innerText)
        if(e.target.innerText === SAME_AS_TAX_RECORD) 
            props.setSquareFootage(SAME_AS_TAX_RECORD)
    }

    const handleCustomSqFt = e => {
        setCustom(e.target.value)
        props.setSquareFootage(e.target.value);
    }

    const updateChangeReason = value => {
        setReason(value)
        props.setChangeReason(value)
    }

    //UI
    return <div>
        <div className='page-one-container'>
            <Paper className="page-two-paper">
                <h1>Is your Square Footage...?</h1>
                <form
                onSubmit={e => e.preventDefault()}>
                    <Radio 
                    checked={sqFtSelection === 'Same as Tax Record'}
                    onChange={handleRadioChange}
                    value={SAME_AS_TAX_RECORD}
                    />
                    <p
                    className='admin-page-three-label'
                    onClick={handlePClick}
                    value={SAME_AS_TAX_RECORD}
                    >Same as Tax Record</p>
                    <Radio 
                    checked={sqFtSelection === 'Change to:'}
                    onChange={handleRadioChange}
                    value="Change to:"
                    />
                    <p
                    className='admin-page-three-label'
                    onClick={handlePClick}
                    value="Change to:"
                    >Change to:</p>
                    {sqFtSelection === 'Change to:' ?
                    <>
                        <TextField 
                        onChange={handleCustomSqFt}
                        style={styles.inputStyle}
                        value={customSqFt}
                        />
                    </>
                    : null}
                    {sqFtSelection === 'Change to:' && customSqFt !== ''
                    ? <>
                        <h1
                        className='page-one-fade-in'
                        >Select a Reason for this Change:</h1>
                            <RadioButtons
                            buttons={changeReasons}
                            onSelection={updateChangeReason}
                            />
                    </>
                    : null}
                    <br />
                    {sqFtSelection === 'Same as Tax Record' || (changeReason && customSqFt)
                    ? <Link to="/page/4">
                            <Button
                            className='page-one-fade-in admin-page-three-button'
                            style={{...buttonStyleMain, marginTop: "3vh"}}
                            variant='contained'
                            >
                                Next
                            </Button>
                        </Link>
                    : null}
                </form>
            </Paper>
        </div>
    </div>
}

export default connect(null, {setSquareFootage, setChangeReason})(AdminPageThree);