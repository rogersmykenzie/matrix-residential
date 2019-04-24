const initalState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
}

const UPDATE_FIRST_NAME = 'UPDATE_FIRST_NAME';
const UPDATE_LAST_NAME = 'UPDATE_LAST_NAME'
const UPDATE_PHONE_NUMBER = 'UPDATE_PHONE_NUMBER';
const UPDATE_EMAIL = 'UPDATE_EMAIL';

export function changeEmail(email) {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}
export function changePhoneNumber(number) {
    const nums = [1,2,3,4,5,6,7,8,9,0];
    let newNum = number.split('').filter(val => {
        return nums.includes(+val)
    }).join('');
    return {
        type: UPDATE_PHONE_NUMBER,
        payload: newNum
    }
}
export function changeFirstName(name) {
    return {
        type: UPDATE_FIRST_NAME,
        payload: name
    }
}
export function changeLastName(name) {
    return {
        type: UPDATE_LAST_NAME,
        payload: name
    }
}

export default function reducer(state=initalState, action) {
    console.log(state);
    switch(action.type) {
        case UPDATE_FIRST_NAME:
        return {
            ...state,
            firstName: action.payload
        }
        case UPDATE_LAST_NAME:
        return {
            ...state,
            lastName: action.payload
        }
        case UPDATE_PHONE_NUMBER:
        return {
            ...state,
            phoneNumber: action.payload
        }
        case UPDATE_EMAIL:
        return {
            ...state,
            email: action.payload
        }
        default: return state;
    }
}