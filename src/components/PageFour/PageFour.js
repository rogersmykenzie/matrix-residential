import React, { useState } from 'react';
//routing
import {Link} from 'react-router-dom'
//mui
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
//components
import CheckboxComp from '../CheckboxComp/CheckboxComp';
import NextPage from '../NextPage/NextPage';
//redux
import { connect } from 'react-redux';
import { addAccessoryUnit, removeAccessoryUnit, changeSchool } from '../../redux/formInfoReducer';
//inline styles
import styles from './PageFourStyles';
import {buttonStyleMain} from '../../styles/GlobalStyles';

function PageFour(props) {
    //constants
    const accessoryTypes = ["Guest Quarters", "Other", "Pool House"]
    const schoolTypes = ["Elementary School", "Middle School", "High School"]
    //event handlers
    const handleClick = val => {
        props.addAccessoryUnit(val);
    }
    const handleUnclick = val => {
        props.removeAccessoryUnit(val)
    }
    const handleChange = e => {
        props.changeSchool(e.target.name, e.target.value);
    }
    //booleans
    const schoolsFilledOut = props.elementarySchool && props.middleSchool && props.highSchool
    //internal functions
    const camelCase = text => text.split(' ').map((val, i) => {
            if(i === 0) {
                return val.toLowerCase();
            } else {
                return val[0].toUpperCase() + val.substring(1).toLowerCase();
            }
        }).join('');

    return (
        <div className='container'>
            <Paper className='page-two-paper'>
                <h1>Do you have any Accessory Units?</h1>
                {accessoryTypes.map(val => {
                    return <CheckboxComp
                        label={val}
                        whenClicked={handleClick}
                        whenUnclicked={handleUnclick}
                    />
                })}
                {props.accessoryUnitTypes.length > 0
                    ? <>
                        <h1 className='fade-in'>What schools is this property part of?</h1>
                        {schoolTypes.map(val => <TextField
                            variant='outlined'
                            placeholder={val}
                            name={camelCase(val)}
                            style={styles.textFieldStyle}
                            onChange={handleChange}
                        />)}
                        {schoolsFilledOut ? <>
                            <br />
                            <NextPage to={`/page/${props.page + 1}`} />
                            </>
                            : null}
                    </>
                    : null}
            </Paper>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        accessoryUnitTypes: state.formInfoReducer.accessoryUnitTypes,
        elementarySchool: state.formInfoReducer.elementarySchool,
        middleSchool: state.formInfoReducer.middleSchool,
        highSchool: state.formInfoReducer.highSchool,
    }
};

export default connect(mapStateToProps, { addAccessoryUnit, removeAccessoryUnit, changeSchool })(PageFour);