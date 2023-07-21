
/**
 * Para generalizar este es mi contexto para hacer fetch a la API pero solo a un 
 * personaje (la informacion obtenida se muestra en el componente de IndividualCaracter)
 */

import { createContext, useContext, useEffect, useState } from "react";
const DataIndividualContext = createContext()
export const useDataIndividualContext = () => useContext(DataIndividualContext)
export const DataIndividualContextProvider = ({ children }) => {


    /**
     * Aqui creo las variables de estado
     * el cual es el id de caracter y un array para guardar la informacion del
     * personaje obtenida de la API.
     */


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