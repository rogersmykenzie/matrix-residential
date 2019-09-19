import React, {useState} from 'react';
//mui
import Input from '@material-ui/core/Input';
//components
import RadioButtons from '../../RadioButtons/RadioButtons';
import CheckboxComp from '../../CheckboxComp/CheckboxComp';
import NextPage from '../../NextPage/NextPage'
import ExtraRoomNextButton from '../../ExtraRoomNextButton/ExtraRoomNextButton';

function DiningRoomType(props) {
    //state
    const [width, setWidth] = useState(null)
    const [height, setHeight] = useState(null)
    const [level, setLevel] = useState(null);
    const [selectedProps, setSelectedProps] = useState([]);
    //constants
    const PROPERTIES = ["Built Ins", "Butlers Pantry", "Dumbwaiter"];
    //event handlers
    function addProperty(prop) {
        setSelectedProps([...selectedProps, prop]);
    }
    function removeProperty(prop) {
        let arr = [...selectedProps];
        arr.splice(arr.indexOf(prop), 1);
        setSelectedProps(arr);
    }
    //render
    return (
        <>
            <Input
                placeholder='width'
                style={{'width': '10%', 'textAlign': 'center'}}
                type='number'
                onChange={e => setWidth(e.target.value)}
            />
            <Input 
                placeholder='length'
                style={{'width': '10%', 'textAlign': 'center'}}
                type='number'
                onChange={e => setHeight(e.target.value)}
            />
            <RadioButtons 
                buttons={[1,2,3]}
                onSelection={selection => setLevel(selection)}
            />
            {PROPERTIES.map(val => (
                <CheckboxComp 
                    label={val}
                    whenClicked={addProperty}
                    whenUnclicked={removeProperty}
                />
            ))}
            {!props.cameFromExtraRoom 
            ? 
            <NextPage 
                to={`/page/9/${props.roomNumber + 1}`}
                whenClicked={props.reset}
            />
            : 
            <ExtraRoomNextButton resetForm={props.resetForm} />
            }
        </>
    )
}

export default DiningRoomType;