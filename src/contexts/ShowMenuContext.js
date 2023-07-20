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