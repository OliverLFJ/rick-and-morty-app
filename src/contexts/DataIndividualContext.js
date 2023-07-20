import { createContext, useContext, useEffect, useState } from "react";

const DataIndividualContext = createContext()
export const useDataIndividualContext = () => useContext(DataIndividualContext)
export const DataIndividualContextProvider = ({ children }) => {

    const [needInformation, setNeedInformation] = useState(false)
    const [character, setCharacter] = useState(0)
    const [characterInformation, setCharacterInformation] = useState([])

    if (needInformation) {
        fetch(`https://rickandmortyapi.com/api/character/${character}`)
            .then((response) => response.json())
            .then((data) => setCharacterInformation(data))
    }

    return (
        <DataIndividualContext.Provider
            value={{

            }}
        >
            {children}
        </DataIndividualContext.Provider>
    )
}