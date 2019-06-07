const initialState = {
    propertyTypes: [],
    housingTypes: [],
    homeStyles: [],
    constructionTypes: [],
    squareFootageType: '',
    squareFootageChangeReason: null,
    accessoryUnitTypes: [],
    elementarySchool: '',
    middleSchool: '',
    highSchool: ''
}
//type constants
const ADD_PROPERTY_TYPE = 'ADD_PROPERTY_TYPE';
const ADD_HOUSING_TYPE = 'ADD_HOUSING_TYPE';
const ADD_HOME_STYLE = 'ADD_HOME_STYLE';
const REMOVE_PROPERTY_TYPE = 'REMOVE_PROPERTY_TYPE';
const REMOVE_HOUSING_TYPE = 'REMOVE_HOUSING_TYPE';
const REMOVE_HOME_STYLE = 'REMOVE_HOME_STYLE';
const ADD_CONSTRUCTION_TYPE = 'ADD_CONSTRUCTION_TYPE';
const REMOVE_CONSTRUCTION_TYPE = 'REMOVE_CONSTRUCTION_TYPE';
const SET_SQUARE_FOOTAGE_TYPE = 'SET_SQUARE_FOOTAGE_TYPE';
const SET_SQUARE_FOOTAGE_CHANGE_REASON = "SET_SQUARE_FOOTAGE_CHANGE_REASON"
const ADD_ACCESSORY_UNIT_TYPES = 'ADD_ACCESSORY_UNIT_TYPES';
const REMOVE_ACCESSORY_UNIT_TYPES = 'REMOVE_ACCESSORY_UNIT_TYPES';
const CHANGE_SCHOOL = 'CHANGE_SCHOOL';
//action creators
export function changeSchool(school, schoolName) {
    return {
        type: CHANGE_SCHOOL,
        payload: {
            school,
            schoolName
        }
    }
}
export function removeAccessoryUnit(unit) {
    return {
        type: REMOVE_ACCESSORY_UNIT_TYPES,
        payload: unit
    }
}
export function addAccessoryUnit(unit) {
    return {
        type: ADD_ACCESSORY_UNIT_TYPES,
        payload: unit
    }
}
export function setChangeReason(reason) {
    return {
        type: SET_SQUARE_FOOTAGE_CHANGE_REASON,
        payload: reason
    }
}
export function setSquareFootage(type) {
    return {
        type: SET_SQUARE_FOOTAGE_TYPE,
        payload: type
    }
}
export function removeConstructionType(style) {
    return {
        type: REMOVE_CONSTRUCTION_TYPE,
        payload: style
    }
}
export function addConstructionType(style) {
    return {
        type: ADD_CONSTRUCTION_TYPE,
        payload: style
    }
}
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
        case CHANGE_SCHOOL:
            return {
                ...state,
                [action.payload.school]: action.payload.schoolName
            }
        case REMOVE_ACCESSORY_UNIT_TYPES:
            const tempArr = state.accessoryUnitTypes.slice();
            const index = tempArr.findIndex(val => val === action.payload);
            tempArr.splice(index, 1);
            return {
                ...state,
                accessoryUnitTypes: tempArr
            }
        case ADD_ACCESSORY_UNIT_TYPES:
            return {
                ...state,
                accessoryUnitTypes: [...state.accessoryUnitTypes, action.payload]
            }
        case SET_SQUARE_FOOTAGE_CHANGE_REASON:
            return {
                ...state,
                squareFootageChangeReason: action.payload
            }
        case SET_SQUARE_FOOTAGE_TYPE:
            if(action.payload === "Same as Tax Record") {
                return {
                    ...state,
                    squareFootageType: action.payload,
                    squareFootageChangeReason: null
                }
            }
            return {
                ...state,
                squareFootageType: action.payload
            }
        case ADD_CONSTRUCTION_TYPE:
            return {
                ...state,
                constructionTypes: [...state.constructionTypes, action.payload]
            }
        case REMOVE_CONSTRUCTION_TYPE:
            let newConstructionTypes = [...state.constructionTypes];
            newConstructionTypes.splice(newConstructionTypes.findIndex(val => {
                return val === action.payload
            }), 1);
            return {
                ...state,
                constructionTypes: newConstructionTypes
            }
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