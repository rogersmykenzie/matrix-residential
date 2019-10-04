import React, {useState, useRef} from 'react';
//components
import DiningRoomType from '../diningTypes/DiningRoomType/DiningRoomType';
import KitchenType from '../diningTypes/KitchenType/KitchenType';
import BreakfastNookType from '../diningTypes/BreakfastNookType/BreakfastNookType';
//redux
import { connect } from 'react-redux';
//routing
import { Redirect } from 'react-router-dom';
//mui
import Paper from "@material-ui/core/Paper"
import Axios from 'axios';

function AdminPageNine(props) {
    //state
    const [selectOption, setOption] = useState(null)
    const [formData, setFormData] = useState([]);
    //refs
    const selectNode = useRef();
    //event handlers
    function reset(data) {
        setFormData([...formData, {
            ...data,
            type: selectOption
        }])
        selectNode.current.value = 'none';
        setOption(null)
    }
    //redirect
    console.log(props)
    if(props.room > props.numDining) {
        console.log("here")
        Axios.post("/info", {
            diningData: formData
        })
        return <Redirect to={`/page/${props.page + 1}`} />
    }
    //pass-down props
    const componentProps = {
        reset,
        roomNumber: props.room,
        sectionPage: props.page
    }
    //component decider
    let currentForm = (function() {
        switch(selectOption) {
            case 'dining-room':
                return <DiningRoomType {...componentProps} />
            case 'kitchen':
                return <KitchenType {...componentProps} />
            case 'breakfast-nook':
                return <BreakfastNookType {...componentProps} />;
            default: return <h1>Oh god please help</h1>
        }
    })()
    //render
    return (
        <Paper className="page-two-paper">
            <h1>Please Specify Dining Area {props.room}?</h1>
            <select ref={selectNode} onChange={e => setOption(e.target.value)}>
                <option value='none'>- Select an Option -</option>
                <option value='dining-room'>Dining Room</option>
                <option value='kitchen'>Kitchen</option>
                <option value="breakfast-nook">Breakfast Nook</option>
            </select>
            {currentForm}
        </Paper>
    )
}

function mapStateToProps(reduxState) {
    console.log(reduxState);
    return {
        numDining: reduxState.formInfoReducer.numRooms.numDining
    }
}

export default connect(mapStateToProps)(AdminPageNine);