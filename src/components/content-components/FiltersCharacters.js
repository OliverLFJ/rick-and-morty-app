import { useDataContext } from "../../contexts/DataContext"
import { speciesArray, genderArray, statusArray } from './../../utils/dataFilters.js'


const FiltersCharacters = () => {

    const { setGender,
        setSpecie,
        setStatus,
        setName,
        status,
        specie,
        gender,
        setPageSelected
    } = useDataContext()

    const putName = (event) => {
        setPageSelected(1)
        setName(event.target.value)
    }

    const putSpecie = (event) => {
        setPageSelected(1)
        setSpecie(event.target.value)
    }

    const putStatus = (event) => {
        setPageSelected(1)
        setStatus(event.target.value)
    }

    const putGender = (event) => {
        setPageSelected(1)
        setGender(event.target.value)
    }

    return (
        <div className="filters-container">
            <div className="form-content">
                <label className="label-filter">Name</label>
                <input onChange={(e) => putName(e)} className="form-input" placeholder="Write name to filter" />
            </div>
            <div className="form-group">
                <div className="form-content">
                    <label className="label-filter">Status</label>
                    <select className="form-input-select" value={status} onChange={(e) => putStatus(e)}>
                        {statusArray.map((item, index) => {
                            return (
                                <option key={index} className="form-input-select" value={item}>{item}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="form-content">
                    <label className="label-filter">Specie</label>
                    <select className="form-input-select" value={specie} onChange={(e) => putSpecie(e)}>
                        {speciesArray.map((item, index) => {
                            return (
                                <option key={index} className="form-input-select" value={item}>{item}</option>
                            )
                        })}

                    </select>
                </div>
                <div className="form-content">
                    <label className="label-filter">Gender</label>
                    <select className="form-input-select" value={gender} onChange={(e) => putGender(e)}>
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