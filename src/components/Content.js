import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Home from "./content-components/Home"
import AboutCharacter from "./content-components/AboutCharacter"
import EpisodeInfo from "./content-components/EpisodeInfo"
import LocationInfo from './content-components/LocationInfo';
import { useShowMenuContext } from '../contexts/ShowMenuContext';
import slime from './../assets/slime.png'

const Content = () => {

    const { showMenu, setShowMenu } = useShowMenuContext()
    const location = useLocation();
    const showMenubutton = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="main">
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/about-character' element={<AboutCharacter />} />
                <Route exact path='/episode-info' element={<EpisodeInfo />} />
                <Route exact path='/location-info' element={<LocationInfo />} />
            </Routes>
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