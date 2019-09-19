import React, { useState } from 'react';
//mui
import Input from '@material-ui/core/Input'
//components
import CheckboxComp from '../../CheckboxComp/CheckboxComp';
import NextPage from '../../NextPage/NextPage';
import RadioButtons from '../../RadioButtons/RadioButtons';
import ExtraRoomNextButton from "../../ExtraRoomNextButton/ExtraRoomNextButton";
//css
import './MasterBedroomType.css';
//redux
import {connect} from 'react-redux';
//store
import {addBedroom} from '../../../redux/formInfoReducer';

function MasterBedroomType(props) {
    const [width, setWidth] = useState(-1);
    const [height, setHeight] = useState(-1);
    const [level, setLevel] = useState(null)
    const [selectedProps, setProp] = useState([]);
    const bedroomProps = ["Cedar Closet", "Coffee Bar", "Custom Closet System", "Dual Baths", "Dual Sinks", "Fireplace", "Garden Tub", "Hollywood Bath", "Jetted Tub", "Laundry Chute", "Linen Closet", "Medicine Cabinet", "Separate Shower", "Separate Vanities", "Shower Body Sprays", "Solid Surface/Non-natural Counter", "Steam Shower", "Tile Counters"];

    function handleClick(label) {
        setProp([...selectedProps, label])
    }
    
    function handleUnclick(label) {
        let arr = [...selectedProps];
        let index = arr.findIndex(val => val === label);
        arr.splice(index, 1);
        setProp(arr);
    }

    function dispatchBedroom() {
        let bedroom = {
            type: 'master',
            width,
            height,
            level,
            properties: selectedProps
        }
        props.addBedroom(bedroom)
    }

    return (
        <div>
            <div className='master-bedroom-type-form'>
                <Input
                    placeholder='width'
                    style={{'width': '10%', 'textAlign': 'center'}}
                    type='number'
                    onChange={e => setWidth(e.target.value)}
                />
                <Input
                    placeholder='height'
                    style={{'width': '10%'}}
                    type='number'
                    onChange={e => setHeight(e.target.value)}
                />
            </div>
            {width !== -1 && height !== -1 ?
            <>
                <RadioButtons buttons={[1,2,3]} onSelection={setLevel}/>
            </>
            : null}
            {level !== null ?
            <div className='fade-in'>
                <h1>Select All that Apply</h1>
                {bedroomProps.map(val => {
                    return <CheckboxComp label={val} whenClicked={handleClick} whenUnclicked={handleUnclick} />
                })}
            </div>
            : null}
            {selectedProps.length > 0 && !props.cameFromExtraRoom ?
            <NextPage to={`/page/7/${props.roomNumber + 1}`} whenClicked={() => dispatchBedroom() || props.reset()} />
            : selectedProps.length > 0 ? 
            <ExtraRoomNextButton 
            resetForm={props.resetForm}
            /> : null}
        </div>
    )
}

export default connect(undefined, {addBedroom})(MasterBedroomType);