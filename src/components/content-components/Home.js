import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/DataContext";
import { useEpisodesContext } from "../../contexts/EpisodesContext";
import { useDataIndividualContext } from "../../contexts/DataIndividualContext";

const Home = () => {
    const { recenCharacters } = useDataContext();
    const { recenEpisodes } = useEpisodesContext();
    const { setCharacter } = useDataIndividualContext();

    return (
        <div className="character-general-container">
            <h3 className="title-recents">Recent Characters</h3>
            <div className="container-recents">
                {recenCharacters.map((item, index) => {
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
            <h3 className="title-recents padding-title">Recent Episodes</h3>
            <div className="episodes-general-container">
                {recenEpisodes.map((item, index) => {
                    return (
                        <div className="episode-container" key={index}>
                            <h3 className="episode-title">{item.name}</h3>
                            <h3>Air Date: {item.air_date}</h3>
                            <h3>Episode: {item.episode}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Home;
