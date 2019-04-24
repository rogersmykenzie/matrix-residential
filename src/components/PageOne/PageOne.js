import React from 'react';
//mui
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
//css
import './PageOne.css';
//redux
import { incCurrentPage } from '../../redux/userReducer';
import { connect } from 'react-redux';
//components
import CheckboxComp from '../CheckboxComp/CheckboxComp';
//inline styling
import styles from './PageOneStyles'

const PageOne = props => {
    const [pickedFirstAnswer, setFirst] = React.useState(false);
    const [pickedSecondAnswer, setSecond] = React.useState(false);

    const setPicked = () => {
        setFirst(true)
    }

    const setPicked2 = () => {
        setSecond(true);
    }
    
    React.useEffect(() => {
        props.incCurrentPage();
    }, [])

    const propertyTypes = ['Condo', 'Farm/Ranch', 'Half Duplex', 'Single Family', 'Townhouse'];
    const housingTypes = ['Apartment', 'Attached or 1/2 duplex', 'Condo/Townhome', 'Designated Historical Home', 'Doublewide Mobile w/ Land', 'Farm/Ranch House', 'Garden/Zero Lot Line', 'Hi Rise', 'Historical/Conservation Dist.', 'Interval Ownership', 'Lake House', 'Log Cabin', 'Manufacture (cert exch)', 'Resort Property', 'Single Detached', 'Single Mobile w/ Land', 'Underground', 'Vacation Home'];
    return(
        <div
        className='page-one-container'
        >
            <Paper
            className='page-one-paper'
            >
                <h1>Please select a property type:</h1>
                {propertyTypes.map(val => {
                    return <CheckboxComp 
                    label={val}
                    whenClicked={setPicked}
                    />
                })}
                {pickedFirstAnswer && 
                <>
                    <h1>
                        Select all that describe your housing type:
                    </h1>
                    {housingTypes.map(val => {
                        return <CheckboxComp 
                        label={val}
                        whenClicked={setPicked2}
                        />
                    })}
                </>
                }
                <br />
                {pickedSecondAnswer && <Button
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

export default connect(mapStateToProps, {incCurrentPage})(PageOne);