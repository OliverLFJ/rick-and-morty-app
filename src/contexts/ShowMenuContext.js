/**
 * Este context lo utilizo para mostrar o dejar de mostrar el
 * menu, se podria haber hecho con una simple variable de estado
 * pero para evitar el prop driling lo hice en un context pues
 * el estado de mostrar o dejar de mostrar lo hacen varios componentes.
 */

import { createContext, useContext, useState } from "react";
const ShowMenuContext = createContext()
export const useShowMenuContext = () => useContext(ShowMenuContext)
export const ShowMenuContextProviver = ({ children }) => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <ShowMenuContext.Provider
            value={{
                showMenu,
                setShowMenu
            }}
        >
            {children}
        </ShowMenuContext.Provider>
    )
}