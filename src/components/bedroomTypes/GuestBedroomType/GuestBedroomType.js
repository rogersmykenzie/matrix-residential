import React, {useState} from 'react';
//css
import './GuestBedroomType.css';
//mui
import Input from '@material-ui/core/Input';
//components
import RadioButtons from '../../RadioButtons/RadioButtons'
import CheckboxComp from '../../CheckboxComp/CheckboxComp';
import NextPage from '../../NextPage/NextPage';
//action creators
import {addBedroom} from '../../../redux/formInfoReducer';
//redux
import {connect} from 'react-redux';
import ExtraRoomNextButton from '../../ExtraRoomNextButton/ExtraRoomNextButton';

function GuestBedroomType(props) {
    const [width, setWidth] = useState(-1);
    const [height, setHeight] = useState(-1);
    const [level, setLevel] = useState(-1);
    const [selectedProps, setProp] = useState([]);
    const BEDROOM_PROPS = ['Built Ins', 'Cedar Closet', 'Custom Closet System', 'Split Bedrooms', 'Walk-in Closets']
    
    function addProp(prop) {
        setProp([...selectedProps, prop]);
    }

    function removeProp(prop) {
        let index = selectedProps.indexOf(prop);
        let arr = [...selectedProps];
        arr.splice(index, 1);
        setProp(arr);
    }

    function dispatchBedroom() {
        let bedroom = {
            type: 'guest',
            width,
            height,
            level,
            properties: selectedProps
        }
        props.addBedroom(bedroom);
    }

    return (
        <div className='guest-bedroom-type-form'>
            <Input 
            placeholder="width"
            onChange={e => setWidth(e.target.value)}
            />
            <Input 
            placeholder="height"
            onChange={e => setHeight(e.target.value)}
            />
            <div>
                <RadioButtons buttons={[1,2,3]} onSelection={setLevel} />
            </div>
            {BEDROOM_PROPS.map(prop => <CheckboxComp key={prop} label={prop} whenClicked={addProp} whenUnclicked={removeProp} />)}
            {!props.cameFromExtraRoom ? <NextPage to={`/page/7/${props.roomNumber + 1}`} whenClicked={() => dispatchBedroom() || props.reset()} /> 
            : <ExtraRoomNextButton 
            resetForm={props.resetForm}
            />}
        </div>
    )
} 

export default connect(undefined, {addBedroom})(GuestBedroomType)