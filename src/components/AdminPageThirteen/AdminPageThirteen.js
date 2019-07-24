import React, {useState, useRef} from 'react';
//components
//routing
import {Redirect} from 'react-router-dom';
//redux
import {connect} from 'react-redux';

function AdminPageEleven(props) {
    //state
    const [selectedOption, setOption] = useState(null)
    //refs
    const selectNode = useRef()
    //redirect
    if(props.room > props.numBathrooms) {
        return <Redirect to="/page/14" />
    }
    //event handlers
    function reset() {
        selectNode.current.value = 'none';
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
            <select ref={selectNode} onChange={e => setOption(e.target.value)}>
                <option value='none'>- Select an Option -</option>
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

export default connect(mapStateToProps)(AdminPageEleven);