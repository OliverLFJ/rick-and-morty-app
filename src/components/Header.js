/**
 * Este es el componente Header, aqui muestro el logo de la app y el menu
 * o en si se requiere los iconos para mostra el menu de dispositivos
 * moviles.
 */

import { CgMenuMotion, CgMenuRight } from "react-icons/cg";
import { useShowMenuContext } from "../contexts/ShowMenuContext";
import MenuDesktop from "./menu-components/MenuDesktop";

const Header = () => {

    const { showMenu, setShowMenu } = useShowMenuContext()
    const showMenubutton = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="header">
            <div className='logo-container'>
            </div>
            <MenuDesktop />
            <div className="container-icon-menu" onClick={showMenubutton}>
                <CgMenuMotion className={showMenu ? "icon-menu-open-close" : "icon-menu-hide"} />
                <CgMenuRight className={showMenu ? "icon-menu-open-hide" : "icon-menu-open"} />
            </div>
        </div>
    )
}

export default Header