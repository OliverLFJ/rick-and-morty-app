import { useDataContext } from "../../contexts/DataContext";

const AboutCharacter = () => {
    const { characters, handleNextPage, handlePrevPage } = useDataContext();

    return (
        <div className="character-general-container">
            <div className="container-recents">
                {characters.map((item, index) => {
                    return (
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
                    )
                })}
            </div>
            <div className="button-container">
                <button className="prev-page" onClick={() => handlePrevPage("character")} disabled={!handlePrevPage}>
                    Previous
                </button>
                <button className="next-page" onClick={() => handleNextPage("character")} disabled={!handleNextPage}>
                    Next
                </button>
            </div>
        </div>
    )
}

export default AboutCharacter