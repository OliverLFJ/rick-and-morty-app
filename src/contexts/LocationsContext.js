import { createContext, useContext, useEffect, useState } from "react";

const LocationsContext = createContext();
export const useLocationsContext = () => useContext(LocationsContext);
export const DataLocationsProvider = ({ children }) => {
    const [locations, setLocations] = useState([]);
    const [countData, setCountData] = useState(0)
    const [location, setLocation] = useState(1)
    const [characterData, setCharacterData] = useState([]);
    const [locationInfo, setLocationInfo] = useState('')

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location')
            .then((response) => response.json())
            .then((data) => setCountData(data.info.count))
    }, [])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/location/' + location)
            .then((response) => response.json())
            .then((data) => {
                setLocationInfo(data.name)
                setLocations(data.residents)
            }
            )
            .catch((error) => {
                setLocationInfo([])
                setLocations([])
            });
    }, [location])

    const fetchCharacterData = async () => {
        const characters = await Promise.all(
            locations.map((characterURL) => fetch(characterURL).then((response) => response.json()))
        );
        setCharacterData(characters);
    };

    useEffect(() => {
        if (locations.length > 0) {
            fetchCharacterData();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [locations]);


    return (
        <LocationsContext.Provider
            value={{
                location,
                locations,
                countData,
                characterData,
                locationInfo,
                setLocation
            }}
        >
            {children}
        </LocationsContext.Provider>
    );
};
