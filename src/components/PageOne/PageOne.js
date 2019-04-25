import React, {useState, useEffect} from 'react';
//mui
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
//css
import './PageOne.css';
//redux
import { setCurrentPage } from '../../redux/userReducer';
import { connect } from 'react-redux';
//components
import CheckboxComp from '../CheckboxComp/CheckboxComp';
//inline styling
import styles from './PageOneStyles'

const PageOne = props => {
    const [pickedFirstAnswer, setFirst] = useState(false);
    const [pickedSecondAnswer, setSecond] = useState(false);

    //pass down functions for CheckboxComp
    const setPicked = () => {
        setFirst(true)
    }

    const setPicked2 = () => {
        setSecond(true);
    }

    //update page in nav
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
                        whenClicked={setPicked}
                        />
                    })}
                </div>
                {pickedFirstAnswer && 
                <div className='page-one-fade-in'>
                    <h1>
                        Select all that describe your housing type:
                    </h1>
                    {housingTypes.map(val => {
                        return <CheckboxComp 
                        label={val}
                        whenClicked={setPicked2}
                        />
                    })}
                </div>
                }

                {/* vvvvv answers not required vvvvv */}
                {pickedSecondAnswer && 
                <div className='page-one-fade-in'>
                    <h1>
                        Select any home styles that apply
                    </h1>
                    {optionalHousingStyles.map(val => {
                        return <CheckboxComp
                        label={val}
                        />
                    })}
                </div>}

                <br />
                {pickedSecondAnswer && <Button
                className='page-one-fade-in'
                style={styles.buttonStyle}
                variant='contained'
                >
                    Next
                </Button>}
            </Paper>
        </div>
    )
}

const mapStateToProps = props => props;

export default connect(mapStateToProps, {setCurrentPage})(PageOne);