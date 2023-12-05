// import { React } from 'react'
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocietyContextProvider, EventContextProvider } from './context/AllContexts';
// import MainNavbar from './components/MainNavbar';
// import HomeCarousel from './components/HomeCarousel'
// import CardsSection from './components/CardsSection';
import MainNavbar from './components/MainNavbar';
import Home from './pages/Home';
import AllSocieties from './pages/AllSocieties';
import Society from './pages/Society';
import Event from './pages/Event';


const App = () => {
  return (
    
    <div className="App">

      <BrowserRouter>

    <SocietyContextProvider>
      <EventContextProvider>
        <MainNavbar/ >
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route exact path="/societies" element={<AllSocieties/>} />
            <Route path="/societies/:societyId" element={<Society />} />
          <Route path="/events/:eventId" element={<Event />} />
    
        </Routes>

      </EventContextProvider>
    </SocietyContextProvider>
    </BrowserRouter>

    </div>
    
        
  )
}

export default App
