import React, {useState, useRef} from 'react';
//mui
import Paper from '@material-ui/core/Paper';
//components
import MasterBedroomType from '../bedroomTypes/MasterBedroomType/MasterBedroomType'
import GuestBedroomType from '../bedroomTypes/GuestBedroomType/GuestBedroomType';
import OtherBedroomType from '../bedroomTypes/OtherBedroomType/OtherBedroomType';
//redux
import {connect} from 'react-redux';
//routing
import {Redirect} from 'react-router-dom';

//Bedroom Form
function AdminPageSeven(props) {
    const [bedroomType, setType] = useState(null);
    //ref
    const selectNode = useRef(null);

    if(props.room > props.numBeds) {
        return <Redirect to='/page/8/1' />
    }

    function reset() {
        setType(null);
        selectNode.current.value = 'none';
    }

    const componentProps = {
        reset,
        roomNumber: props.room
    }

    let selectedRoomForm = (function() { //im just lazy and don't want to add breaks
        switch(bedroomType) {
            case 'master':
                return <MasterBedroomType {...componentProps} />
            case 'guest':
                return <GuestBedroomType {...componentProps} />
            case 'regular':
                return <OtherBedroomType {...componentProps} />
            default: return null
        }
    })()

    return (
        <div className='container'>
            <Paper className='page-two-paper'>
                <h1>What type of bedroom is this?</h1>
                <select ref={selectNode} onChange={(e) => setType(e.target.value)}>
                    <option value='none'>-- Select an option</option>
                    <option value='master'>Master</option>
                    <option value='guest'>Guest</option>
                    <option value='regular'>Regular</option>
                </select>
                {selectedRoomForm}
            </Paper>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        numBeds: state.formInfoReducer.numRooms.numBeds
    }
}

export default connect(mapStateToProps)(AdminPageSeven);