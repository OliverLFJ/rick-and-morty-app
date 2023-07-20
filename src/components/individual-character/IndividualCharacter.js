import { useDataIndividualContext } from "../../contexts/DataIndividualContext";

const IndividualCharacter = () => {
    const { characterInformation } = useDataIndividualContext();

    // Verificamos si characterInformation no está vacío
    if (Object.keys(characterInformation).length > 0) {
        return (
            <div className="individual-character-container">
                <div>
                    <h2>{characterInformation.name}</h2>
                </div>
                <div>
                    <img src={characterInformation.image} alt="Character" />
                </div>
                <div>
                    <div>
                        <h4>Specie</h4>
                        <p>{characterInformation.species}</p>
                    </div>
                    <div>
                        <h4>Status</h4>
                        <p>{characterInformation.status}</p>
                    </div>
                    <div>
                        <h4>Gender</h4>
                        <p>{characterInformation.gender}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>Origin</h4>
                        <p>{characterInformation.origin.name}</p>
                    </div>
                    <div>
                        <h4>Location</h4>
                        <p>{characterInformation.location.name}</p>
                    </div>
                </div>
            </div>
        );
    } else {
        return <p>No se encontró información del personaje.</p>;
    }
};

export default IndividualCharacter;
