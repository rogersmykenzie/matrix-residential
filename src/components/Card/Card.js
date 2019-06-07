import React from 'react';
//css
import './Card.css';

function Card(props) {
    return (
        <div className='card'>
            <i className={props.icon}></i>
        </div>
    )
}

export default Card;