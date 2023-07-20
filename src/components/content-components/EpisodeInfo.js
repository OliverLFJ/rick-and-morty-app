import { useEpisodesContext } from "../../contexts/EpisodesContext";

const EpisodeInfo = () => {
    const { episode, countData, characterData, setEpisode, episodeInfo } = useEpisodesContext();

    const changeEpisode = (episodeSelected) => {
        setEpisode(episodeSelected)
    }

    return (
        <div className="character-general-container">
            <h4 className="title-episode">Episode: {episodeInfo}</h4>
            <div className="select-container">
                <select className="select-episodes" value={episode} onChange={(e) => changeEpisode(e.target.value)}>
                    {[...Array(countData)].map((_, index) => (
                        <option key={index} value={index + 1}>
                            Episode {index + 1}
                        </option>
                    ))}
                </select>
            </div>
            <div className="container-recents">
                {characterData.map((item, index) => {
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
        </div>
    )
}

export default EpisodeInfo