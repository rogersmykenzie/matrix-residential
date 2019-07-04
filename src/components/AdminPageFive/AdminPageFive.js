import React, { useReducer, useState } from 'react';
//css
import './AdminPageFive.css'
//mui
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
//components
import NextPage from '../NextPage/NextPage';
//redux
import { updateNumRooms } from '../../redux/formInfoReducer'
import { connect } from 'react-redux';
//tooltips
import Popup from 'reactjs-popup';
import Tooltip from '../Tooltip/Tooltip';

function AdminPageFive(props) {
    useState()
    const [rooms, dispatch] = useReducer(function (state, action) {
        switch (action.type) {
            case 'UPDATE_BEDS':
                return {
                    ...state,
                    numBeds: action.payload
                }
            case 'UPDATE_DINING':
                return {
                    ...state,
                    numDining: action.payload
                }
            case 'UPDATE_BATH':
                return {
                    ...state,
                    numBath: action.payload
                }
            case 'UPDATE_LIVING':
                return {
                    ...state,
                    numLiving: action.payload
                }
            default: return state;
        }
    }, {
            numBeds: null,
            numBath: null,
            numDining: null,
            numLiving: null
        })
    return (
        <main className='container'>
            <Paper className='page-two-paper'>
                <div className='fade-in'>
                    <h1>How many
                        <Popup
                            trigger={<span className='tooltip-trigger'> bedrooms </span>}
                            position="right top"
                            on="hover">
                                <Tooltip>This includes any master/guest bedrooms.</Tooltip>
                        </Popup>
                        do you have in the house?</h1>
                    <Input
                        type='number'
                        startAdornment={
                            <i
                                className="fas fa-bed"
                                style={{ width: '30px' }}
                            ></i>
                        }
                        onChange={(e) => dispatch({ type: 'UPDATE_BEDS', payload: +e.target.value })}
                    />
                </div>
                {rooms.numBeds !== null ?
                    <div className='fade-in'>
                        <h1>How many 
                            <Popup
                                trigger={<span className='tooltip-trigger'> dining rooms? </span>}
                                position="right top"
                                on="hover">
                                    <Tooltip>This includes kitchens, breakfast nooks, etc.</Tooltip>
                            </Popup>
                        </h1>
                        <Input
                            type='number'
                            startAdornment={
                                <i
                                    className="fas fa-utensils"
                                    style={{ width: '30px' }}
                                ></i>
                            }
                            onChange={(e) => dispatch({ type: 'UPDATE_DINING', payload: +e.target.value })}
                        />
                    </div> : null}
                {rooms.numDining !== null ?
                    <div className='fade-in'>
                        <h1>How many 
                            <Popup
                                trigger={<span className='tooltip-trigger'> bathrooms </span>}
                                position="right top"
                                on="hover">
                                    <Tooltip>This includes half bathrooms.</Tooltip>
                            </Popup>do you have?</h1>
                        <Input
                            type='number'
                            startAdornment={
                                <i
                                    className="fas fa-shower"
                                    style={{ width: '30px' }}
                                ></i>
                            }
                            onChange={(e) => dispatch({ type: 'UPDATE_BATH', payload: +e.target.value })}
                        />
                    </div> : null}
                {rooms.numBath !== null ?
                    <div className='fade-in'>
                        <h1>How many 
                            <Popup
                                trigger={<span className='tooltip-trigger'> living spaces </span>}
                                position='right top'
                                on="hover">
                                    <Tooltip>This includes studies, utility, media/game, and living rooms.</Tooltip>
                            </Popup>
                            do you have?</h1>
                        <Input
                            type='number'
                            startAdornment={
                                <i
                                    className="fas fa-couch"
                                    style={{ width: '30px' }}
                                ></i>
                            }
                            onChange={(e) => dispatch({ type: 'UPDATE_LIVING', payload: +e.target.value })}
                        />
                    </div> : null}
                {rooms.numLiving !== null ? <span onClick={() => props.updateNumRooms(rooms)}><NextPage to={`/page/${props.page + 1}`} /></span> : null}
            </Paper>
        </main>
    )
}

export default connect(undefined, { updateNumRooms })(AdminPageFive);