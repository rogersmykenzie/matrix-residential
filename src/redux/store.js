import { createStore, combineReducers, compose } from 'redux';
import userReducer from './userReducer';
import formInfoReducer from './formInfoReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let reducer = combineReducers({
    userReducer,
    formInfoReducer
})

export default createStore(reducer, composeEnhancers());
