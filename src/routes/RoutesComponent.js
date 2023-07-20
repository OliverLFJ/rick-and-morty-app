import { Route, Routes } from "react-router-dom"
import Home from "../components/content-components/Home"
import AboutCharacter from "../components/content-components/AboutCharacter"
import EpisodeInfo from "../components/content-components/EpisodeInfo"
import LocationInfo from "../components/content-components/LocationInfo"

const RoutesComponent = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about-character' element={<AboutCharacter />} />
            <Route exact path='/episode-info' element={<EpisodeInfo />} />
            <Route exact path='/location-info' element={<LocationInfo />} />
        </Routes>
    )
}

export default RoutesComponent