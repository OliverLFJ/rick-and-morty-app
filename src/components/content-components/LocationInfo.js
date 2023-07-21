import { Link } from "react-router-dom";
import { useLocationsContext } from "../../contexts/LocationsContext";
import { useDataIndividualContext } from "../../contexts/DataIndividualContext";

const LocationInfo = () => {
    const { location, countData, characterData, setLocation, locationInfo } = useLocationsContext();
    const changeLocation = (locationSelected) => {
        setLocation(locationSelected)
    }

    const { setCharacter } = useDataIndividualContext()

    return (
        <div className="character-general-container">
            <h4 className="title-episode">Location: {locationInfo}</h4>
            <div className="select-container">
                <select className="select-episodes" value={location} onChange={(e) => changeLocation(e.target.value)}>
                    {[...Array(countData)].map((_, index) => (
                        <option key={index} value={index + 1}>
                            Location {index + 1}
                        </option>
                    ))}
                </select>
            </div>
            <div className="container-recents">
                {characterData.map((item, index) => {
                    return (
                        <Link key={index} to="/character" onClick={() => setCharacter(item.id)}>
                            <div className="card-recent-character">
                                <div className="portal-resource">
                                    <h4>{item.id}</h4>
                                </div>
                                <img alt="character" className="character-img" src={item.image} />
                                <div className="info-character">
                                    <h3 className="name-character">{item.name}</h3>
                                    <div className="footer-card">
                                        <div className="state-character" style={{
                                            backgroundColor: item.status === "Alive" ? "#97ce4c" : item.status === "Dead" ? "red" : item.status === "unknown" ? "gray" : ""
                                        }}>
                                            {item.status}</div>
                                        <h4>{item.gender}</h4>
                                        <h4>{item.species}</h4>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default LocationInfo