import React, {useState} from 'react';
//css
import './PageTwo.css';
//mui
import Paper from '@material-ui/core/Paper';
//components
import CheckboxComp from '../CheckboxComp/CheckboxComp';
import NextPage from '../NextPage/NextPage';
//redux
import {connect} from 'react-redux';
import {removeConstructionType, addConstructionType} from '../../redux/formInfoReducer';

const PageTwo = props => {
    const [numClicked, setClicked] = useState(0);
    const isAgent = props.auth === 'a';
    const construction = ['Block', 'Brick', 'Common Wall', 'Concrete', 'Fiber Cement', 'Frame/Brick Trim', 'Glass', 'Log', 'Metal', 'Other', 'Rock/Stone', 'Siding', 'Steel', 'Stucco', 'Tilt Wall', 'Vinyl Siding', 'Wood'];
    const status = ['New Const - Complete', 'New Const - Incomplete', 'Preowned', 'Proposed', 'Unknown'];
    const setPicked = type => {
        setClicked(numClicked + 1);
        props.addConstructionType(type)
    }

    const setUnpicked = type => {
        setClicked(numClicked - 1)
        props.removeConstructionType(type);
    }

    return (
        <div className='container'>
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
                    {numClicked && isAgent ?
                    <>
                        <h1>Select a Construction Status</h1>
                        {status.map(val => {
                            return <CheckboxComp 
                            label={val}
                            />
                        })}
                    </>
                    : null}
                    <br />
                    {numClicked ? <NextPage to={`/page/${props.page + 1}`} /> : null}
                </div>
            </Paper>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        constructionTypes: state.formInfoReducer.constructionTypes,
        auth: state.userReducer.auth
    };
}

export default connect(mapStateToProps, {removeConstructionType, addConstructionType})(PageTwo);