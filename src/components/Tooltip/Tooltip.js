import React from 'react';
//css
import './Tooltip.css'

/**
 * @param {String} props.image - An image URL for the tooltip
 * @param {String} props.icon - An icon alternative for the tooltip
 * @param {String} props.tip - The text for the tooltip to display
 */

function Tooltip(props) {
    return (
        <div>
            {props.image ? <img src={props.image} alt='' /> 
            : <i className={props.icon}></i>}
            <p className='tooltip-text'>{props.children}</p>
        </div>
    )
}

export default Tooltip;