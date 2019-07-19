import React, {useState} from 'react';

function AdminPageNine(props) {
    const [selectOption, setOption] = useState(null)

    let currentForm = (function() {
        switch(selectOption) {
            case 'dining-room':
                return <h1>Dining</h1>
            default: return <h1>Oh god please help</h1>
        }
    })()


    return (
        <>
            <h1>What type of Dining Area is this?</h1>
            <select onChange={e => setOption(e.target.value)}>
                <option>- Select an Option -</option>
                <option value='dining-room'>Dining Room</option>
                <option value='kitchen'>Kitchen</option>
                <option value="breakfast-nook">Breakfast Nook</option>
            </select>
            {currentForm}
        </>
    )
}

export default AdminPageNine;