import { CgMenuMotion, CgMenuRight } from "react-icons/cg";
import { useShowMenuContext } from "../contexts/ShowMenuContext";

const Header = () => {

    const { showMenu, setShowMenu } = useShowMenuContext()
    const showMenubutton = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="header">
            <div className='logo-container'>
            </div>
            <div className="container-icon-menu" onClick={showMenubutton}>
                <CgMenuMotion className={showMenu ? "icon-menu-open-close" : "icon-menu-hide"} />
                <CgMenuRight className={showMenu ? "icon-menu-open-hide" : "icon-menu-open"} />
            </div>

        </div>
    )
}

export default Header