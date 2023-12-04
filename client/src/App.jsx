// import { React } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocietyContextProvider, EventContextProvider } from './context/AllContexts';
// import MainNavbar from './components/MainNavbar';
// import HomeCarousel from './components/HomeCarousel'
// import CardsSection from './components/CardsSection';

import Home from './pages/Home';

const App = () => {
  return (
    

    <SocietyContextProvider>
      <EventContextProvider>
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        </Routes>
        </BrowserRouter>
      </EventContextProvider>
    </SocietyContextProvider>
    
        
  )
}

export default App
