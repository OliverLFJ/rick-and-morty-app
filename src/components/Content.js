/**
     * Este es el componente que maneja el contenido a mostrar por medio
     * de las opciones del menu, para realizar el enrutamiento utilizo
     * react-router-dom, aqui tambien muestro el menu de dispositivos moviles
     * (esto cambia en caso que no se necesite, usando media queries de CSS).
 * 
 */

import RoutesComponent from '../routes/RoutesComponent';
import MenuMobile from './menu-components/MenuMobile';

const Content = () => {

    return (
        <div className="main">
            <RoutesComponent />
            <MenuMobile />
        </div>
    )
}

export default Content