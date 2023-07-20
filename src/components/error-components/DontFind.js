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