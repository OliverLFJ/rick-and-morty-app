import Header from './components/Header'
import Content from './components/Content'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextProvider } from './contexts/DataContext';
import { EpisodesContextProvider } from './contexts/EpisodesContext';
import { useShowMenuContext } from './contexts/ShowMenuContext';
import { DataLocationsProvider } from './contexts/LocationsContext';
import { useEffect, useState } from 'react';

const App = () => {

  const { setShowMenu } = useShowMenuContext();
  const [showNavbar, setShowNavbar] = useState(true);

  const scrollSite = () => {
    setShowMenu(false)
  };

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setShowNavbar(currentScrollPos <= 0);
    setShowMenu(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='container' onScroll={scrollSite}>
      <Router>
        {showNavbar && <Header />}
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