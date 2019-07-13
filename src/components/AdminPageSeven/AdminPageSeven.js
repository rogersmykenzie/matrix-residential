import React, {useState} from 'react';
//mui
import Paper from '@material-ui/core/Paper';
//components
import MasterBedroomType from '../bedroomTypes/MasterBedroomType/MasterBedroomType'
//redux
import {connect} from 'react-redux';
//routing
import {Redirect} from 'react-router-dom';

//Bedroom Form
function AdminPageSeven(props) {
    const [bedroomType, setType] = useState(null);
    if(props.room > props.numBeds) {
        return <Redirect to='/page/8/1' />
    }
    console.log(props)
    let selectedRoomForm = (function() {
        switch(bedroomType) {
            case 'master':
                return <MasterBedroomType reset={() => setType(null)} roomNumber={props.room} />
            default: return null
        }
    })()

    return (
        <div className='container'>
            <Paper className='page-two-paper'>
                <h1>What type of bedroom is this?</h1>
                <select onChange={(e) => setType(e.target.value)}>
                    <option>-- Select an option</option>
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