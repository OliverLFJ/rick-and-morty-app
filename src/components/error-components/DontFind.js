/**
     * Este es mi componente para el manejo de errores, 
     * utilizo el mismo para evitar generar otros componentes
     * 
     * (ESTE COMPONENTE SE PUEDE ESCALAR)
     * por ejemplo podria mandar un estado el cual en vez de mostrar "No results were found".
*/

import RickAndMorty from './../../assets/rickmorty.png'

const DontFind = () => {
    return (
        <div className='dont-find-container'>
            <div className='image-container-dont-find'>
                <img className='image-dont-find' src={RickAndMorty} alt='rick and morty' />
            </div>
            <div className='text-dont-find-container'>
                <p className='text-dont-find'>No results were found!</p>
            </div>
        </div>
    )
}

export default DontFind