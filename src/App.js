import Header from './components/Header'
import Content from './components/Content'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './contexts/DataContext';
import { EpisodesContextProvider } from './contexts/EpisodesContext';
import { DataLocationsProvider } from './contexts/LocationsContext';
import { useShowMenuContext } from './contexts/ShowMenuContext';

const App = () => {

  const { setShowMenu } = useShowMenuContext()

  const handleScroll = () => {
    setShowMenu(false)
  };
  return (
    <div className='container' onScroll={handleScroll}>
      <Router>
        <Header />
        <DataContextProvider>
          <EpisodesContextProvider>
            <DataLocationsProvider>
              <Content />
            </DataLocationsProvider>
          </EpisodesContextProvider>
        </DataContextProvider>
      </Router>
    </div>
  )
}

export default App