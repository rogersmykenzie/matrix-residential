import React from 'react';
//components
import Card from '../Card/Card';
//css
import './DEPRECATED_AdminPageFive.css';
//routing
import {Link} from 'react-router-dom'

function DEPRECATED_AdminPageFive(props) {
    //constants
    const ROOM_TYPES = [{
        type: "Living",
        icon: "fas fa-couch",
        size: "fa-5x"
    }, {
        type: "Kitchen",
        icon: "fas fa-utensils",
        size: "fa-5x"
    }, {
        type: "Bedroom",
        icon: "fas fa-bed",
        size: "fa-5x"
    }, {
        type: "Bathroom",
        icon: "fas fa-shower",
        size: "fa-5x"
    }, {
        type: "Other",
        icon: "fas fa-ellipsis-h",
        size: "fa-5x"
    }];

    return (
        <div className='page-five'>
            <div className='cards'>
                {ROOM_TYPES.map(val => (
                    <Link to={`/${val.type.toLowerCase()}`}>
                        <Card icon={`${val.icon} ${val.size}`} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default DEPRECATED_AdminPageFive;