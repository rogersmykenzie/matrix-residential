import React, {useState, useRef} from 'react';
//components
import DiningRoomType from '../diningTypes/DiningRoomType/DiningRoomType';

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
    //pass-down props
    const componentProps = {
        reset,
        roomNumber: props.room
    }
    //component decider
    let currentForm = (function() {
        switch(selectOption) {
            case 'dining-room':
                return <DiningRoomType {...componentProps} />
            case 'kitchen':
                return null
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

export default AdminPageNine;