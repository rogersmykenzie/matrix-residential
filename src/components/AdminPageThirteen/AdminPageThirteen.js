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


function AdminPageThirteen(props) {
    console.log(props);
    //state
    const [option, setOption] = React.useState(null);
    //refs
    const selectNode = React.createRef();
    //redirect
    if(props.room > props.numLiving) {
        return <Redirect to="/page/14" />
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
            default: return Error;
        }
    })()
    //event handlers
    function reset() {
        selectNode.current.value = 'none';
        props.setWasClicked(false);
        setOption(null);
    }
    // console.log(props);
    return (
        <>
            <h1>Please Specify Living Room {props.room}</h1>
            <select ref={selectNode} onChange={e => {
                props.setWasClicked(true);
                setOption(e.target.value)
            }}>
                {props.wasClicked === false ? <option value='none'>- Select an Option -</option> : null}
                <option value='study'>Study</option>
                <option value='media-room'>Media Room</option>
                <option value='game-room'>Game Room</option>
                <option value='living-room'>Living Room</option>
                <option value="utility">Utility Room</option>
            </select>
            {<CurrentForm reset={reset} roomNumber={props.room} sectionPage={props.page} />}
        </>
    )
}

function mapStateToProps(reduxState) {
    console.log(reduxState);
    return {
        numLiving: reduxState.formInfoReducer.numRooms.numLiving
    }
}

export default connect(mapStateToProps)(withWasClickedFunctionality(AdminPageThirteen));