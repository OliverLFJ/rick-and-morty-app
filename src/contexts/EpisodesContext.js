import { createContext, useContext, useEffect, useState } from "react";

const EpisodesContext = createContext();
export const useEpisodesContext = () => useContext(EpisodesContext);
export const EpisodesContextProvider = ({ children }) => {
    const [episodes, setEpisodes] = useState([]);
    const [recenEpisodes, setRecentEpisodes] = useState([])
    const [countData, setCountData] = useState([])
    const [episode, setEpisode] = useState(1)
    const [characterData, setCharacterData] = useState([]);
    const [episodeInfo, setEpisodeInfo] = useState('')

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode?page=3')
            .then((response) => response.json())
            .then((data) => {
                setRecentEpisodes(data.results);
                setCountData(data.info.count);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/episode/' + episode)
            .then((response) => response.json())
            .then((data) => {
                setEpisodes(data.characters)
                setEpisodeInfo(data.name)
            }
            )
    }, [episode])

    const fetchCharacterData = async () => {
        const characters = await Promise.all(
            episodes.map((characterURL) => fetch(characterURL).then((response) => response.json()))
        );
        setCharacterData(characters);
    };

    useEffect(() => {
        if (episodes.length > 0) {
            fetchCharacterData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [episodes]);

    return (
        <EpisodesContext.Provider
            value={{
                episode,
                episodes,
                recenEpisodes,
                countData,
                characterData,
                episodeInfo,
                setEpisode
            }}
        >
            {children}
        </EpisodesContext.Provider>
    );
};
