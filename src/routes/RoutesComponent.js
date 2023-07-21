import { Route, Routes } from "react-router-dom"
import Home from "../components/content-components/Home"
import AboutCharacter from "../components/content-components/AboutCharacter"
import EpisodeInfo from "../components/content-components/EpisodeInfo"
import LocationInfo from "../components/content-components/LocationInfo"
import IndividualCharacter from "../components/individual-character/IndividualCharacter"
import DontFind from "../components/error-components/DontFind"

const RoutesComponent = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/characters' element={<AboutCharacter />} />
            <Route exact path='/episodes' element={<EpisodeInfo />} />
            <Route exact path='/locations' element={<LocationInfo />} />
            <Route exact path='/character' element={<IndividualCharacter />} />
            <Route path='*' element={<DontFind />}/>
        </Routes>
    )
}

export default RoutesComponent