// import { React } from 'react'
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocietyContextProvider, EventContextProvider, CompetitionContextProvider } from './context/AllContexts';

import MainNavbar from './components/MainNavbar';
import Home from './pages/Home';
import AllSocieties from './pages/AllSocieties';
import Society from './pages/Society';
import Event from './pages/Event';
import Competition from './pages/Competition';

const App = () => {
  return (
    
    <div className="App">

      <BrowserRouter>

    <SocietyContextProvider>
      <EventContextProvider>
      <CompetitionContextProvider>

        <MainNavbar/ >
        <Routes>
        <Route exact path="/" element={<Home/>} />
          <Route exact path="/societies" element={<AllSocieties/>} />
          <Route path="/societies/:societyId" element={<Society />} />
          <Route path="/events/:eventId" element={<Event />} />
          <Route path="/competition/:competitionId" element={<Competition />} />
        </Routes>

      </CompetitionContextProvider>
      </EventContextProvider>
    </SocietyContextProvider>
    </BrowserRouter>

    </div>
    
        
  )
}

export default App
