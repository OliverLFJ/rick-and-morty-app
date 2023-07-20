import Header from './components/Header'
import Content from './components/Content'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './contexts/DataContext';
import { EpisodesContextProvider } from './contexts/EpisodesContext';
import { DataLocationsProvider } from './contexts/LocationsContext';

const App = () => {

  return (
    <div className='container'>
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