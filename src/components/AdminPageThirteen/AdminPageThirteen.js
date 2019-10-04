import React from 'react';
//redux
import {connect} from 'react-redux';
//components
import Study from '../livingTypes/Study/Study';
import MediaRoom from '../livingTypes/MediaRoom/MediaRoom';
import GameRoom from '../livingTypes/GameRoom/GameRoom';
import LivingRoom from '../livingTypes/LivingRoom/LivingRoom';
import UtilityRoom from '../livingTypes/UtilityRoom/UtilityRoom';
import Error from '../Error/Error';
//routing
import {Redirect} from 'react-router-dom';
//hoc
import withWasClickedFunctionality from '../hoc/withWasClickedFunctionality/withWasClickedFunctionality';
//fetch
import Axios from 'axios';
//mui
import Paper from "@material-ui/core/Paper"


function AdminPageThirteen(props) {
    //state
    const [option, setOption] = React.useState("none");
    const [formData, setFormData] = React.useState([]);
    //refs
    const selectNode = React.createRef();
    //redirect
    if(props.room > props.numLiving) {
        Axios.post("/info", {
            livingData: formData
        })
        return <Redirect to={`/page/${props.page + 1}`} />
    }
    //component decider
    const CurrentForm = (function() {
        switch(option) {
            case 'study':
                return Study;
            case 'media-room':
                return MediaRoom;
            case 'game-room':
                return GameRoom;
            case 'living-room':
                return LivingRoom;
            case 'utility':
                return UtilityRoom;
            default: return () => null;
        }
    })()
    //event handlers
    function reset(data) {
        setFormData([...formData, {
            ...data,
            type: option
        }])
        selectNode.current.value = 'none';
        props.setWasClicked(false);
        setOption(null);
    }
    // console.log(props);
    return (
        <Paper className="page-two-paper">
            <h1>Please Specify Living Room {props.room}</h1>
            <select ref={selectNode} onChange={e => {
                props.setWasClicked(true);
                setOption(e.target.value)
            }}>
                <option value='none'>- Select an Option -</option>
                <option value='study'>Study</option>
                <option value='media-room'>Media Room</option>
                <option value='game-room'>Game Room</option>
                <option value='living-room'>Living Room</option>
                <option value="utility">Utility Room</option>
            </select>
            {<CurrentForm reset={reset} roomNumber={props.room} sectionPage={props.page} />}
        </Paper>
    )
}

function mapStateToProps(reduxState) {
    console.log(reduxState);
    return {
        numLiving: reduxState.formInfoReducer.numRooms.numLiving
    }
}

export default connect(mapStateToProps)(withWasClickedFunctionality(AdminPageThirteen));