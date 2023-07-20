import { createContext, useContext, useEffect, useState } from "react";

const DataIndividualContext = createContext()
export const useDataIndividualContext = () => useContext(DataIndividualContext)
export const DataIndividualContextProvider = ({ children }) => {

    const [character, setCharacter] = useState(0)
    const [characterInformation, setCharacterInformation] = useState([])

    useEffect(() => {
        if (character !== 0) {
            fetch(`https://rickandmortyapi.com/api/character/${character}`)
                .then((response) => response.json())
                .then((data) => setCharacterInformation(data))
            setCharacter(0)
        }
    }, [character])
    return (
        <DataIndividualContext.Provider
            value={{
                characterInformation,
                setCharacter,
            }}
        >
            {children}
        </DataIndividualContext.Provider>
    )
}