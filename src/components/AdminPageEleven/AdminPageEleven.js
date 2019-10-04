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
//fetch
import Axios from 'axios';
//mui
import Paper from "@material-ui/core/Paper"


function AdminPageEleven(props) {
    //state
    const [selectedOption, setOption] = useState(null)
    const [formData, setFormData] = useState([])
    console.log(props)
    //refs
    const selectNode = useRef()
    //redirect
    if(props.room > props.numBathrooms) {
        Axios.post("/info", {
            bathroomData: formData
        })
        return <Redirect to={`/page/${props.page + 1}`} />
    }
    //event handlers
    function reset(data) {
        setFormData([...formData, {
            ...data,
            type: selectedOption
        }])
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
    console.log(props.room)
    return (
        <Paper className="page-two-paper">
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
        </Paper>
    )
}

function mapStateToProps(reduxState) {
    const {numFullBath, numHalfBath} = reduxState.formInfoReducer.numRooms
    return {
        numBathrooms: numFullBath + numHalfBath
    }
}

export default connect(mapStateToProps)(withWasClickedFunctionality(AdminPageEleven));