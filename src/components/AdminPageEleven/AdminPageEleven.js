import React, {useState, useRef} from 'react';
//components
import FullBathroomType from '../bathroomTypes/FullBathroomType/FullBathroomType';
import HalfBathroomType from '../bathroomTypes/HalfBathroomType/HalfBathroomType';
//routing
import {Redirect} from 'react-router-dom';
//redux
import {connect} from 'react-redux';
//hoc
import withWasClickedFunctionality from '../hoc/withWasClickedFunctionality/withWasClickedFunctionality'

function AdminPageEleven(props) {
    //state
    const [selectedOption, setOption] = useState(null)
    console.log(props)
    //refs
    const selectNode = useRef()
    //redirect
    if(props.room > props.numBathrooms) {
        return <Redirect to="/page/12" />
    }
    //event handlers
    function reset() {
        selectNode.current.value = 'none';
        props.setWasClicked(false);
        setOption(null);
    }
    //pass-down props
    const componentProps = {
        reset,
        roomNumber: props.room,
        sectionPage: props.page
    }
    //component decider
    let currentForm = (function() {
        switch(selectedOption) {
            case 'full-bathroom':
                return <FullBathroomType {...componentProps} />
            case 'half-bathroom':
                return <HalfBathroomType {...componentProps} />
            default: return <h1>oh god please help</h1>
        }
    })()
    //render
    return (
        <>
            <h1>Please Specify Bathroom {props.room}?</h1>
            <select ref={selectNode} onChange={e => {
                props.setWasClicked(true)
                setOption(e.target.value)}
                }>
                {props.wasClicked === false ? <option value='none'>- Select an Option -</option> : null}
                <option value='full-bathroom'>Full Bathroom</option>
                <option value='half-bathroom'>Half Bathroom</option>
            </select>
            {currentForm}
        </>
    )
}

function mapStateToProps(reduxState) {
    const {numFullBath, numHalfBath} = reduxState.formInfoReducer.numRooms
    return {
        numBathrooms: numFullBath + numHalfBath
    }
}

export default connect(mapStateToProps)(withWasClickedFunctionality(AdminPageEleven));