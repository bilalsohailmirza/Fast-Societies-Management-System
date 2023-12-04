// import { React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocietyContextProvider } from './context/AllContexts';
// import MainNavbar from './components/MainNavbar';
// import HomeCarousel from './components/HomeCarousel'
// import CardsSection from './components/CardsSection';

import Home from './pages/Home';

const App = () => {
  return (
    <>

    <SocietyContextProvider>
     <Home />
    </SocietyContextProvider>
    
    </>
        
  )
}

export default App
