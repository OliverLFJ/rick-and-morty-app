/**
     * Aqui utilizo filtrado por medio de estados,
     * para eso hice un reducer para encargarse de despachar 
     * el evento que se necesite, por ejemplo filtro por nombre,
     * especie, status, etc.
     * 
     * Los payloads y los tipos de accion los mando por medio
     * de funciones, finalmente creo una funcion para limpiar 
     * los datos al accionar un boton clean filters.
     * 
     * NOTA: Utilizo los eventos de los campos (e.target.value)
 */

import { useDataContext } from "../../contexts/DataContext"
import { speciesData, genderData, statusData } from './../../utils/dataFilters.js'
import { SET_NAME, SET_STATUS, SET_SPECIE, SET_GENDER } from './../../reducers/actionType';

const FiltersCharacters = () => {

    const {
        setPageSelected,
        dispatch,
        state
    } = useDataContext()

    const putName = (event) => {
        setPageSelected(1);
        dispatch({ type: SET_NAME, payload: event.target.value });
    };

    const putSpecie = (event) => {
        setPageSelected(1);
        dispatch({ type: SET_SPECIE, payload: event.target.value });
    };

    const putStatus = (event) => {
        setPageSelected(1);
        dispatch({ type: SET_STATUS, payload: event.target.value });
    };

    const putGender = (event) => {
        setPageSelected(1);
        dispatch({ type: SET_GENDER, payload: event.target.value });
    };

    const cleanAllFilter = () => {
        dispatch({ type: SET_NAME, payload: '' });
        dispatch({ type: SET_STATUS, payload: '' });
        dispatch({ type: SET_SPECIE, payload: '' });
        dispatch({ type: SET_GENDER, payload: '' });
    }

    return (
        <div className="filters-container">
            <div className="filter-name-button">
                <div className="name-filter">
                    <label className="label-filter">Name</label>
                    <input value={state && state.name} onChange={(e) => putName(e)} className="form-input" placeholder="Write name to filter" />
                </div>
                <div className="clean-container">
                    <button className="clean-button" onClick={cleanAllFilter}>Clean Filters</button>
                </div>
            </div>
            <div className="form-group">
                <div className="form-content">
                    <label className="label-filter">Status</label>
                    <select className="form-input-select" value={state && state.status} onChange={(e) => putStatus(e)}>
                        {statusData.map((item, index) => {
                            return (
                                <option key={index} className="form-input-option" value={item.value}>{item.label}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-content">
                    <label className="label-filter">Specie</label>
                    <select className="form-input-select" value={state && state.specie} onChange={(e) => putSpecie(e)}>
                        {speciesData.map((item, index) => {
                            return (
                                <option key={index} className="form-input-option" value={item.value}>{item.label}</option>
                            )
                        })}

                    </select>
                </div>
                <div className="form-content">
                    <label className="label-filter">Gender</label>
                    <select className="form-input-select" value={state && state.gender} onChange={(e) => putGender(e)}>
                        {genderData.map((item, index) => {
                            return (
                                <option key={index} className="form-input-option" value={item.value}>{item.label}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FiltersCharacters