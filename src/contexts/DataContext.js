import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);
export const DataContextProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [recenCharacters, setRecentCharacters] = useState([])
    const [nextCharacter, setNextCharacter] = useState(
        "https://rickandmortyapi.com/api/character"
    );
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character?page=42')
            .then((response) => response.json())
            .then((data) => setRecentCharacters(data.results))
    }, [])
    const [prevCharacter, setPrevCharacter] = useState(null);
    const fetchData = (type, url, setData, setNext, setPrev) => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setData(data.results);
                setNext(data.info.next);
                setPrev(data.info.prev);
            });
    };
    useEffect(() => {
        fetchData("character", nextCharacter, setCharacters, setNextCharacter, setPrevCharacter);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleNextPage = (type) => {
        if (type === "character") {
            fetchData(type, nextCharacter, setCharacters, setNextCharacter, setPrevCharacter);
        }
    };

    const handlePrevPage = (type) => {
        if (type === "character") {
            fetchData(type, prevCharacter, setCharacters, setNextCharacter, setPrevCharacter);
        }
    };

    return (
        <DataContext.Provider
            value={{
                characters,
                recenCharacters,
                handleNextPage,
                handlePrevPage,
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
