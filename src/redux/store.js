import {createStore, combineReducers} from 'redux';
import userReducer from './userReducer';

export default createStore(userReducer);
