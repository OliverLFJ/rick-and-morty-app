import { useDataContext } from "../../contexts/DataContext";

/**
     * Este es mi componente de botones para la paginacion de mi
     * tabla de personajes, manejo cada click del paginado por medio
     * de funciones y utilizo una variable obtenido del context de datos
     * de personajes el me sirve para decirle al estado que va a hacer
     * (dar click siguiente, previo o elegir una pagina del rango mostrado)
*/


const PaginatedButtons = () => {

    const {
        totalButtons,
        pageSelected,
        setPageSelected,
        setPrevStatus,
        setNextStatus,
        nextStatus,
        prevStatus,
        buttonFind,
        setButtonFind } = useDataContext();

    const nextPage = () => {
        setNextStatus(!nextStatus)
        setPageSelected(pageSelected + 1)
    }

    const prevPage = () => {
        setPrevStatus(!prevStatus)
        setPageSelected(pageSelected - 1)
    }

    const selectPage = (page) => {
        setButtonFind(!buttonFind)
        setPageSelected(page)
    }

    const reset = () => {
        setPageSelected(1)
    }

    return (
        <div className="button-container">
            <button className="button-paginate" disabled={pageSelected === 1} onClick={prevPage}>{'<'}</button>
            <button className="button-paginate" style={{ display: pageSelected > 4 ? 'inline' : 'none' }} onClick={reset}>{'1'}</button>
            {totalButtons.map((item, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => selectPage(item)}
                        className={item === pageSelected ? 'button-paginate active-button' : 'button-paginate'}
                    >
                        {item}
                    </button>
                );
            })}
            <button className="button-paginate" disabled={totalButtons.length === 1} onClick={nextPage}>{'>'}</button>
        </div>
    )
}

export default PaginatedButtons