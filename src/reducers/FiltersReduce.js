/**
 * Este es mi reducer para el manejo de acciones de filtrado,
 * aqui lo que hago es despachar el payload es decir la carga que debe llevar este reducer al contexto
 * de data context que cree para filtrar la API.
 */
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