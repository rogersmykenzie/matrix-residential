import React, {useState, useEffect} from 'react';
//mui
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
//css
import './PageOne.css';
//redux
import { setCurrentPage } from '../../redux/userReducer';
import {
    removeHomeStyle, 
    addHomeStyle, 
    removeHousingType, 
    addHousingType,
    removePropertyType,
    addPropertyType} from '../../redux/formInfoReducer';
import { connect } from 'react-redux';
//components
import CheckboxComp from '../CheckboxComp/CheckboxComp';
//inline styling
import styles from './PageOneStyles'
//routing
import {Link} from 'react-router-dom';

const PageOne = props => {
    const [numPickedFirstAnswer, setFirst] = useState(false); //A counter to make sure they checked at least one property type
    const [numPickedSecondAnswer, setSecond] = useState(false); //A counter to make sure they checked at least one housing type

    //pass down functions for CheckboxComp
    const setPicked = (property) => { //Increments the first counter and adds property type to store
        setFirst(numPickedFirstAnswer + 1);
        props.addPropertyType(property)
    }

    const unPicked = (property) => { //Decrements first counter and removes property type from store
        setFirst(numPickedFirstAnswer - 1);
        props.removePropertyType(property)
    }

    const setPicked2 = (type) => { //Increments second counter and adds property type to store
        setSecond(numPickedSecondAnswer + 1);
        props.addHousingType(type);
    }

    const unPicked2 = (type) => { //Decrements second counter and removes property type from store
        setSecond(numPickedSecondAnswer - 1);
        props.removeHousingType(type);
    }

    //update page in nav - may remove. two sources of truth
    useEffect(() => {
        props.setCurrentPage(1);
    }, [])

    //req info
    const propertyTypes = ['Condo', 'Farm/Ranch', 'Half Duplex', 'Single Family', 'Townhouse'];
    const housingTypes = ['Apartment', 'Attached or 1/2 duplex', 'Condo/Townhome', 'Designated Historical Home', 'Doublewide Mobile w/ Land', 'Farm/Ranch House', 'Garden/Zero Lot Line', 'Hi Rise', 'Historical/Conservation Dist.', 'Interval Ownership', 'Lake House', 'Log Cabin', 'Manufacture (cert exch)', 'Resort Property', 'Single Detached', 'Single Mobile w/ Land', 'Underground', 'Vacation Home'];
    const optionalHousingStyles = ['A-Frame', 'Colonial', 'Contemporary/Modern', 'Craftman', 'Early American', 'English', 'French', 'Geo/Dome', 'Loft', 'Mediterranean', 'Mid-Century Modern', 'Oriental', 'Other', 'Prairie', 'Ranch', 'Southwestern', 'Spanish', 'Split Level', 'Studio', 'Traditional', 'Tudor', 'Victorian']
    
    return(
        <div
        className='page-one-container'
        >
            <Paper
            className='page-one-paper'
            >   
                <div
                className='page-one-fade-in'>
                    <h1>Please select a property type:</h1>
                    {propertyTypes.map(val => {
                        return <CheckboxComp 
                        label={val}
                        whenClicked={(property) => setPicked(property)}
                        whenUnclicked={(property) => unPicked(property)}
                        />
                    })}
                </div>
                {/* Checks to make sure that a first answer was picked before rendering */}
                {numPickedFirstAnswer ?
                <div className='page-one-fade-in'>
                    <h1>
                        Select all that describe your housing type:
                    </h1>
                    {housingTypes.map(val => {
                        return <CheckboxComp 
                        label={val}
                        whenClicked={type => setPicked2(type)}
                        whenUnclicked={type => unPicked2(type)}
                        />
                    })}
                </div> : null
                }

                {/* Checks to make sure a second answer was picked before rendering */}
                {numPickedSecondAnswer && numPickedFirstAnswer ? 
                <div className='page-one-fade-in'>
                    <h1>
                        Select any home styles that apply
                    </h1>
                    {optionalHousingStyles.map(val => {
                        return <CheckboxComp
                        label={val}
                        whenClicked={style => props.addHomeStyle(style)}
                        whenUnclicked={style => props.removeHomeStyle(style)}
                        />
                    })}
                </div> : null}

                {numPickedSecondAnswer && numPickedFirstAnswer 
                ?
                <Link to='/page/2'>
                    <Button
                    className='page-one-fade-in'
                    style={styles.buttonStyle}
                    variant='contained'
                    >
                        Next
                    </Button> 
                </Link> : null}
            </Paper>
        </div>
    )
}

const mapStateToProps = props => props;

export default connect(mapStateToProps, 
    {
        setCurrentPage, 
        addPropertyType, 
        removePropertyType,
        addHousingType,
        addHomeStyle,
        removeHomeStyle,
        removeHousingType
    })(PageOne);