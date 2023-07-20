import { createContext, useContext, useEffect, useReducer, useState } from "react";
import filtersReducer from "../reducers/filtersReducer";

const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);
export const DataContextProvider = ({ children }) => {
    const [characters, setCharacters] = useState([]);
    const [recenCharacters, setRecentCharacters] = useState([])
    const [pages, setPages] = useState(0)
    const [pagesInComponent, setPagesInComponent] = useState([])
    const [totalButtons, setTotalButtons] = useState([])
    const [pageSelected, setPageSelected] = useState(1)
    const [prevStatus, setPrevStatus] = useState(false)
    const [nextStatus, setNextStatus] = useState(false)
    const [buttonFind, setButtonFind] = useState(false)

    const [dontFind, setDonFind] = useState(false)

    //State variables to filter the API

    const initialState = {
        name: '',
        status: '',
        specie: '',
        gender: ''
    };
    const [state, dispatch] = useReducer(filtersReducer, initialState);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character?page=42')
            .then((response) => response.json())
            .then((data) => setRecentCharacters(data.results))
    }, [])


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${pageSelected}&name=${state.name}&status=${state.status}&gender=${state.gender}&species=${state.specie}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCharacters(data.results);
                setPages(data.info.pages);
                setDonFind(false)
            })
            .catch((error) => {
                setCharacters([])
                setPageSelected(1)
                setPagesInComponent([])
                setPages(0)
                setTotalButtons([])
                setButtonFind(false)
                setNextStatus(false)
                setPrevStatus(false)
                setDonFind(true)
            });
    }, [pageSelected, state.name, state.status, state.specie, state.gender, state]);

    useEffect(() => {
        setPagesInComponent([]);
        for (let index = 1; index < pages + 1; index++) {
            setPagesInComponent((prev) => [...prev, index]);
        }
    }, [pages]);

    useEffect(() => {
        const index = pagesInComponent.indexOf(pageSelected)
        if (nextStatus === true) {
            setNextStatus(false)
            setTotalButtons([...pagesInComponent.slice(index, index + 4)])
        } else if (prevStatus === true) {
            setPrevStatus(false)
            setTotalButtons([...pagesInComponent.slice(index - 1, index + 3)])
        } else if (buttonFind === true) {
            setTotalButtons([...pagesInComponent.slice(index, index + 4)])
        } else {
            setTotalButtons([...pagesInComponent.slice(index, index + 4)])
        }
    }, [prevStatus, nextStatus, pagesInComponent, pages, pageSelected, buttonFind])

    return (
        <DataContext.Provider
            value={{
                characters,
                recenCharacters,
                totalButtons,
                pageSelected,
                setPageSelected,
                setPrevStatus,
                setNextStatus,
                setButtonFind,
                nextStatus,
                prevStatus,
                buttonFind,
                setPagesInComponent,
                dispatch,
                state,
                dontFind
            }}
        >
            {children}
        </DataContext.Provider>
    );
};
