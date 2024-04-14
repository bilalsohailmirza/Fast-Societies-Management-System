// import { React } from 'react'
import {BrowserRouter, Routes, Route, } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocietyContextProvider, EventContextProvider, CompetitionContextProvider, ParticipantContextProvider, LogsContextProvider } from './context/AllContexts';


import NotFound from './pages/NotFound';
import Home from './pages/Home';
import AllSocieties from './pages/AllSocieties';
import Society from './pages/Society';
import Event from './pages/Event';
import Competition from './pages/Competition';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    
    <div className="App">

      <BrowserRouter>

    <SocietyContextProvider>
      <EventContextProvider>
      <CompetitionContextProvider>
      <ParticipantContextProvider>
      <LogsContextProvider>

        
        <Routes>

        <Route path="*" element={<NotFound/>} />
        <Route path="/" element={<Home/>} />
          <Route exact path="/societies" element={<AllSocieties/>} />
          <Route path="/societies/:societyId" element={<Society />} />
          <Route path="/events/:eventId" element={<Event />} />
          <Route path="/competition/:competitionId" element={<Competition />} />

          <Route path="/admin" element={<Dashboard/>} />
        </Routes>

      </LogsContextProvider>
      </ParticipantContextProvider>
      </CompetitionContextProvider>
      </EventContextProvider>
    </SocietyContextProvider>
    </BrowserRouter>

    </div>
    
        
  )
}

export default App
