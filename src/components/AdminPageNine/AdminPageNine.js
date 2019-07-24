import React, {useState, useRef} from 'react';
//components
import DiningRoomType from '../diningTypes/DiningRoomType/DiningRoomType';
import KitchenType from '../diningTypes/KitchenType/KitchenType';
import BreakfastNookType from '../diningTypes/BreakfastNookType/BreakfastNookType';
//redux
import { connect } from 'react-redux';
//routing
import { Redirect } from 'react-router-dom';

function AdminPageNine(props) {
    //state
    const [selectOption, setOption] = useState(null)
    //refs
    const selectNode = useRef();
    //event handlers
    function reset() {
        selectNode.current.value = 'none';
        setOption(null)
    }
    //redirect
    console.log(props)
    if(props.room > props.numDining) {
        return <Redirect to='/page/10' />
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
        <>
            <h1>Please Specify Dining Area {props.room}?</h1>
            <select ref={selectNode} onChange={e => setOption(e.target.value)}>
                <option value='none'>- Select an Option -</option>
                <option value='dining-room'>Dining Room</option>
                <option value='kitchen'>Kitchen</option>
                <option value="breakfast-nook">Breakfast Nook</option>
            </select>
            {currentForm}
        </>
    )
}

function mapStateToProps(reduxState) {
    console.log(reduxState);
    return {
        numDining: reduxState.formInfoReducer.numRooms.numDining
    }
}

export default connect(mapStateToProps)(AdminPageNine);