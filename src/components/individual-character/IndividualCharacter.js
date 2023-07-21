/** 
     * Este es mi componente para mostrar al personaje
     * individualmente, primero verificamos que el objeto no venga vacio para que no suelte error, ya que
     * tarda un poco en asignarle la data de la API y como el estado en ese
     * momento viene vacio al intentar asignar informacion con un simple map
     * suelta error.
     * 
     * Una vez se verifica que no venga vacio solamente se asigna el valor 
     * a cada apartado.
*/

import { useDataIndividualContext } from "../../contexts/DataIndividualContext";
const IndividualCharacter = () => {
    const { characterInformation } = useDataIndividualContext();
    if (Object.keys(characterInformation).length > 0) {
        return (
            <div className="individual-character-container">
                <div className="title-container-card">
                    <h2 className="title-character">{characterInformation.name}</h2>
                </div>
                <div className="image-character-container">
                    <img className="image-character" src={characterInformation.image} alt="Character" />
                </div>
                <div className="information-container-card">
                    <div className="container-information">
                        <div className="info-container">
                            <h4 className="information-card-title">Specie</h4>
                            <p className="card-information-information">{characterInformation.species}</p>
                        </div>
                        <div className="info-container">
                            <h4 className="information-card-title">Status</h4>
                            <p className="card-information-information status-card" style={{
                                backgroundColor: characterInformation.status === "Alive" ? "#97ce4c" : characterInformation.status === "Dead" ? "red" : characterInformation.status === "unknown" ? "gray" : ""
                            }}>{characterInformation.status}</p>
                        </div>
                        <div className="info-container">
                            <h4 className="information-card-title">Gender</h4>
                            <p className="card-information-information">{characterInformation.gender}</p>
                        </div>
                    </div>
                    <div className="container-information-second">
                        <div className="info-container">
                            <h4 className="information-card-title">Origin</h4>
                            <p className="card-information-information">{characterInformation.origin.name}</p>
                        </div>
                        <div className="info-container">
                            <h4 className="information-card-title">Location</h4>
                            <p className="card-information-information">{characterInformation.location.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default IndividualCharacter;
