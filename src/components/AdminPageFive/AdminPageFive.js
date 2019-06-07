import React from 'react';
//components
import Card from '../Card/Card';
//css
import './AdminPageFive.css';

function AdminPageFive(props) {
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
    }]
    return (
        <div className='page-five'>
            <div className='cards'>
                {ROOM_TYPES.map(val => (
                    <Card icon={`${val.icon} ${val.size}`} />
                ))}
            </div>
        </div>
    )
}

export default AdminPageFive;