import { Link, useLocation } from 'react-router-dom';
import { useShowMenuContext } from '../contexts/ShowMenuContext';
import slime from './../assets/slime.png'
import RoutesComponent from '../routes/RoutesComponent';

const Content = () => {

    const { showMenu, setShowMenu } = useShowMenuContext()
    const location = useLocation();
    const showMenubutton = () => {
        setShowMenu(!showMenu)
    }
   
      
    return (
        <div className="main">
            <RoutesComponent />
            <div className={showMenu ? 'option-menu-modal' : 'option-menu-modal option-menu-modal-show'}>
                <ul className='routes'>
                    <li className='nav-option-list' onClick={showMenubutton}>
                        <Link className={location.pathname === '/' ? 'active-link' : 'item-list'} to="/" style={{ textDecoration: 'none' }}> Home</Link>
                    </li>
                    <li className='nav-option-list' onClick={showMenubutton}>
                        <Link className={location.pathname === '/about-character' ? 'active-link' : 'item-list'} to="/about-character" style={{ textDecoration: 'none' }}>Character</Link>
                    </li>
                    <li className='nav-option-list' onClick={showMenubutton}>
                        <Link className={location.pathname === '/episode-info' ? 'active-link' : 'item-list'} to="/episode-info" style={{ textDecoration: 'none' }}>Episode</Link>
                    </li>
                    <li className='nav-option-list' onClick={showMenubutton}>
                        <Link className={location.pathname === '/location-info' ? 'active-link' : 'item-list'} to="/location-info" style={{ textDecoration: 'none' }}>Location</Link>
                    </li>
                </ul>
                <div className='slime-container'>
                    <img alt='slime in navbar' src={slime} />
                </div>
            </div>
        </div>
    )
}

export default Content