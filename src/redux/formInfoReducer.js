const initialState = {
    propertyTypes: [],
    housingTypes: [],
    homeStyles: []
}
//type constants

const ADD_PROPERTY_TYPE = 'ADD_PROPERTY_TYPE';
const ADD_HOUSING_TYPE = 'ADD_HOUSING_TYPE';
const ADD_HOME_STYLE = 'ADD_HOME_STYLE';
const REMOVE_PROPERTY_TYPE = 'REMOVE_PROPERTY_TYPE';
const REMOVE_HOUSING_TYPE = 'REMOVE_HOUSING_TYPE';
const REMOVE_HOME_STYLE = 'REMOVE_HOME_STYLE';

//action creators

export function removeHomeStyle(style) {
    return {
        type: REMOVE_HOME_STYLE,
        payload: style
    }
}
export function addHomeStyle(style) {
    return {
        type: ADD_HOME_STYLE,
        payload: style
    }
}
export function removeHousingType(type) {
    return {
        type: REMOVE_HOUSING_TYPE,
        payload: type
    }
} 

export function addHousingType(type) {
    return {
        type: ADD_HOUSING_TYPE,
        payload: type
    }
}

export function removePropertyType(type) {
    return {
        type: REMOVE_PROPERTY_TYPE,
        payload: type
    }
}

export function addPropertyType(type) {
    return {
        type: ADD_PROPERTY_TYPE,
        payload: type
    }
}

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case ADD_PROPERTY_TYPE:
            return {
                ...state,
                propertyTypes: [...state.propertyTypes, action.payload]
            }
        case REMOVE_PROPERTY_TYPE:
            let newPropertyTypes = [...state.propertyTypes];
            newPropertyTypes.splice(newPropertyTypes.findIndex(val => {
                return val === action.payload
            }), 1);
            return {
                ...state,
                propertyTypes: newPropertyTypes
            }
        case ADD_HOUSING_TYPE:
            return {
                ...state,
                housingTypes: [...state.housingTypes, action.payload]
            }
        case REMOVE_HOUSING_TYPE:
            let newHousingTypes = [...state.housingTypes];
            newHousingTypes.splice(newHousingTypes.findIndex(val => {
                return val === action.payload
            }), 1);
            return {
                ...state,
                housingTypes: newHousingTypes
            }
        case ADD_HOME_STYLE:
            return {
                ...state,
                homeStyles: [...state.homeStyles, action.payload]
            }
        case REMOVE_HOME_STYLE:
            let newHomeStyles = [...state.homeStyles];
            newHomeStyles.splice(newHomeStyles.findIndex(val => {
                return val === action.payload
            }), 1)
            return {
                ...state,
                homeStyles: newHomeStyles
            }
        default: return state;
    }
}