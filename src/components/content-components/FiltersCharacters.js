import { useDataContext } from "../../contexts/DataContext"
import { speciesArray, genderArray, statusArray } from './../../utils/dataFilters.js'
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


    return (
        <div className="filters-container">
            <div className="form-content">
                <label className="label-filter">Name</label>
                <input onChange={(e) => putName(e)} className="form-input" placeholder="Write name to filter" />
            </div>
            <div className="form-group">
                <div className="form-content">
                    <label className="label-filter">Status</label>
                    <select className="form-input-select" value={state && state.status} onChange={(e) => putStatus(e)}>
                        {statusArray.map((item, index) => {
                            return (
                                <option key={index} className="form-input-select" value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-content">
                    <label className="label-filter">Specie</label>
                    <select className="form-input-select" value={state && state.specie} onChange={(e) => putSpecie(e)}>
                        {speciesArray.map((item, index) => {
                            return (
                                <option key={index} className="form-input-select" value={item}>{item}</option>
                            )
                        })}

                    </select>
                </div>
                <div className="form-content">
                    <label className="label-filter">Gender</label>
                    <select className="form-input-select" value={state && state.gender} onChange={(e) => putGender(e)}>
                        {genderArray.map((item, index) => {
                            return (
                                <option key={index} className="form-input-select" value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </div>
    )
}

export default FiltersCharacters