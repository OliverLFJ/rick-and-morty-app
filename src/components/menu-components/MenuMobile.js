import { Link, useLocation } from "react-router-dom";
import { useShowMenuContext } from "../../contexts/ShowMenuContext";
import slime from './../../assets/slime.png'


const MenuMobile = () => {
    const { showMenu, setShowMenu } = useShowMenuContext()
    const location = useLocation();
    const showMenubutton = () => {
        setShowMenu(!showMenu)
    }
    return (
        <div className={showMenu ? 'option-menu-modal' : 'option-menu-modal option-menu-modal-show'}>
            <ul className='routes'>
                <li className='nav-option-list' onClick={showMenubutton}>
                    <Link className={location.pathname === '/' ? 'active-link' : 'item-list'} to="/" style={{ textDecoration: 'none' }}> Home</Link>
                </li>
                <li className='nav-option-list' onClick={showMenubutton}>
                    <Link className={location.pathname === '/characters' ? 'active-link' : 'item-list'} to="/characters" style={{ textDecoration: 'none' }}>Character</Link>
                </li>
                <li className='nav-option-list' onClick={showMenubutton}>
                    <Link className={location.pathname === '/episodes' ? 'active-link' : 'item-list'} to="/episodes" style={{ textDecoration: 'none' }}>Episode</Link>
                </li>
                <li className='nav-option-list' onClick={showMenubutton}>
                    <Link className={location.pathname === '/locations' ? 'active-link' : 'item-list'} to="/locations" style={{ textDecoration: 'none' }}>Location</Link>
                </li>
            </ul>
            <div className='slime-container'>
                <img alt='slime in navbar' src={slime} />
            </div>
        </div>
    )
}

export default MenuMobile