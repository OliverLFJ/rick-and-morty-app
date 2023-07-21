/**
     * Aqui asigno valores a los campos con un map de los datos de la API.
     * Valido el length para mostrar el paginado, ya que si no hay tabla no
     * deberia mostrarse.
 */

import { useDataContext } from "../../contexts/DataContext";
import PaginatedButtons from "./PaginatedButtons";
import FiltersCharacters from "./FiltersCharacters";
import DontFind from "../error-components/DontFind";
import { useDataIndividualContext } from "../../contexts/DataIndividualContext";
import { Link } from "react-router-dom";

const AboutCharacter = () => {
    const { characters, dontFind } = useDataContext();
    const { setCharacter } = useDataIndividualContext();

    return (
        <div className="character-general-container">
            <FiltersCharacters />
            {dontFind ? <DontFind /> :
                <div className="container-recents">
                    {characters.map((item, index) => {
                        return (
                            <Link key={index} to="/character" onClick={() => setCharacter(item.id)}>
                                <div key={index} className="card-recent-character">
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
            }
            {characters && characters.length > 0 ? <PaginatedButtons /> : null}
        </div>
    )
}

export default AboutCharacter