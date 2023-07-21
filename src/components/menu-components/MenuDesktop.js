import { Link, useLocation } from "react-router-dom";


const MenuDesktop = () => {
    const location = useLocation();
    return (
        <div className="menu-desktop">
            <ul className='routes'>
                <li className='nav-option-list'>
                    <Link className={location.pathname === '/' ? 'active-link' : 'item-list'} to="/" style={{ textDecoration: 'none' }}> Home</Link>
                </li>
                <li className='nav-option-list'>
                    <Link className={location.pathname === '/characters' ? 'active-link' : 'item-list'} to="/characters" style={{ textDecoration: 'none' }}>Character</Link>
                </li>
                <li className='nav-option-list'>
                    <Link className={location.pathname === '/episodes' ? 'active-link' : 'item-list'} to="/episodes" style={{ textDecoration: 'none' }}>Episode</Link>
                </li>
                <li className='nav-option-list'>
                    <Link className={location.pathname === '/locations' ? 'active-link' : 'item-list'} to="/locations" style={{ textDecoration: 'none' }}>Location</Link>
                </li>
            </ul>
        </div>
    )
}

export default MenuDesktop