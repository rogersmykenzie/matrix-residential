import React from 'react';
//components
import GuestBedroomType from '../GuestBedroomType/GuestBedroomType';

function OtherBedroomTypes(props) {
    return <GuestBedroomType {...props} bedroomType="other" />;
}

export default OtherBedroomTypes;