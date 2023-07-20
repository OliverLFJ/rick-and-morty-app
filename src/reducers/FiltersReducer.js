// filtersReducer.js
import { SET_NAME, SET_STATUS, SET_SPECIE, SET_GENDER } from './actionType'

const filtersReducer = (state, action) => {
    switch (action.type) {
        case SET_NAME:
            return { ...state, name: action.payload };
        case SET_STATUS:
            return { ...state, status: action.payload };
        case SET_SPECIE:
            return { ...state, specie: action.payload };
        case SET_GENDER:
            return { ...state, gender: action.payload };
        default:
            return state;
    }
};

export default filtersReducer;