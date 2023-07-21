
/**
 * Este es mi context, encargado de realizar la carga de estados
 * Aqui tengo primero las importaciones y la creacion del contexto.
 */

import { createContext, useContext, useEffect, useReducer, useState } from "react";
import FiltersReducer from "../reducers/FiltersReduce";
const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);
export const DataContextProvider = ({ children }) => {
    /**
     * Aqui tengo todos mis estados inicializados con useState,
     * esto es escencial para saber que 
     */
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

    /**
     * Esta es mi variable inicial para mi reducer y saber
     * que datos filtra con la API.
     */

    const initialState = {
        name: '',
        status: '',
        specie: '',
        gender: ''
    };
    const [state, dispatch] = useReducer(FiltersReducer, initialState);
    /**
     * Aqui fetch a la API de datos recientes
     * lo hice rapido con un paginado a la ultima pagina, ya que en si
     * no hay datos recientes, los ultimos son de hace años.
     */
    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character?page=42')
            .then((response) => response.json())
            .then((data) => setRecentCharacters(data.results))
    }, [])

    /**
     * Aqui hago fetch a la api ya sea por medio del paginado o de su pagina,
     * nombre o cualquier dato mandando por la accion dada al despachador
     * del reducer
     * 
     * (Se que podria haber usado los campos prev y next de la misma api)
     * practicamente hace lo mismo que el paginado solo se me facilito mas con la
     * pagina.
     */
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${pageSelected}&name=${state.name}&status=${state.status}&gender=${state.gender}&species=${state.specie}`)
            .then((response) => {
                return response.json();
            })

            /**
             * Seteo los resultados de la API, y seteo algunos
             * datos que utilizare ya sea para paginar o para 
             * el manejo de errores. 
             */

            .then((data) => {
                setCharacters(data.results);
                setPages(data.info.pages);
                setDonFind(false)
            })

            /**
             * Aqui manejo los errores soltados por la API,
             * y para setear de nuevo los valores utilizo los estados
             * para volver a dejar los valores como se necesitan
             */

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


    /**
     * Este for lo utilizo para obtener el total de paginas que hay en la API (estado pages = 42)
     * 
     * Aqui obtengo un array de numeros practicamente los cuales son el total de paginas
     * al inicio lo seteo en array vacio pues si no lo coloco me haria un acumulador
     * de datos muy grandes pues al usar prev guardo ese dato y acumulo el siguiente (el index del for)
     */
    useEffect(() => {
        setPagesInComponent([]);
        for (let index = 1; index < pages + 1; index++) {
            setPagesInComponent((prev) => [...prev, index]);
        }
    }, [pages]);

    /**
     * Con el hook useEffect lo que hago aqui es mi paginado,
     * primero creo una constante para obtener el indice del valor de la pagina seleccionada 
     * (Este lo envio desde mi componente de paginacion (ahi le digo al estado si se eligio alguna
     * pagina, o se movio una hacia adeltante o regreso))
     * 
     * finalmente me da mi indice (por ejemplo la paginacion siempre
     * inicia en la pagina 1, si el usuario presiona el boton (next > ) le manda al estado
     * el valor = 2) Aqui para facilitar maneje tres casos si da click al boton previo , si da click al
     * siguiente o si selecciono una pagina del rango mostrado (<  1,2,3,4,5 > ).
     * 
     * una vez mandado que pagina desea poner uso un slice para obtener un rango de numeros
     * estos numeros pasaran a ser el valor del rango de botones (yo elegi cuatro para no llenar
     * de botones la paginacion).
     * 
     * Caso de uso : paginacion inicial (< 1 2 3 4 >)
     * usuario selecciona ---> pagina 3
     * 
     * hook entiende que usuario no presiono nextStatus(false) ni prevStatus(false), el hook entiende que
     * selecciono un boton con numero de pagina definido buttonFind (true) (3)....
     * Se comprende que el usuario quiere mostrar la pagina tres de la tabla,
     * por su parte la logica obtiene el index del numero enviado en el array de paginas
     * actualmente (42 numeros guardados).
     * 
     * ---------> El hook use Effect ahora hace un slise desde el index mas 3 numeros
     * estos numeros los guarda en un array, entonces ahora el paginado pasa a ser
     * (3,4,5,6). 
     * 
     * 
     * Caso de uso dos:
     * 
     * paginado actual( <   3,4,5,6   >)
     * 
     * Usuario selecciona el boton previo (<)
     * 
     * el hook ya sabe que no es next ni pagina selecionada,
     * lo que hace ahora es buscar el index en el array de cuarenta y dos numeros donde
     * el numero coincida y retrocede una pagina (3-1=2) y acumula los valores del slice donde
     * empieza desde el index mas cuatro numeros ((2),3,4,5).
     *
     * Ahora el nuevo paginado es (< 2,3,4,5 >) 
     * 
     * Este hook se basa en el cambio de los estados de previo, siguiente y en las paginas 
     * del componente.
     */

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


    /**
     * Aqui mando los valores del contexto con el provedor. 
     * para posteriormente utilizarlos en algun componente envuelto del contexto de DataContext
     * por medio de children. es decir todos los componentes que obtiene envolviendo con el useContext.
     */
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
