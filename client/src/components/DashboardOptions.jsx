import axios from 'axios'

import { useContext, useState } from 'react'
import { CompetitionsContext, EventsContext, ParticipantsContext, SocietiesContext } from '../context/AllContexts'


import AddSociety from './AddSociety' 
import AddEvent from './AddEvent'
import AddCompetition from './AddCompetition'
import ParticipantsList from './ParticipantsList'

const DashboardOptions = () => {

    
    // contexts
    const { societies, setSocieties} = useContext(SocietiesContext)
    const {events, setEvents} = useContext (EventsContext)
    const {competitions, setCompetitions} = useContext(CompetitionsContext)
    const {participants, setParticipants} = useContext(ParticipantsContext)
    //local states
    const [isSocieties, setIsSocieties] = useState(false)
    const [isEvents, setIsEvents] = useState(false)
    const [isCompetitions, setIsCompetitions] = useState(false)
    const [isParticipants, setIsParticipants] = useState(false)

    // click handling functions

    const handleSocieties = async (e) => {
        e.preventDefault()
        try {
            axios.get(
                "http://localhost:5000/api/v1/societies"    
            )
            .then((results) => {
                
                setSocieties(results.data.data.societies)
                setIsSocieties(true)
                setIsEvents(false)
                setIsCompetitions(false)
                setIsParticipants(false)
            })
            
        }
        catch(err) {
            console.log(err)

        }
    }

    const handleEvents = async (e) => {
        e.preventDefault()
        try {
            axios.get(
                "http://localhost:5000/api/v1/societies/allevents/events"    
            )
            .then((results) => {
                
                setEvents(results.data.data.events)
                setIsEvents(true)
                setIsSocieties(false)
                setIsCompetitions(false)
                setIsParticipants(false)
            })
            
        }
        catch(err) {
            console.log(err)

        }
    }
    
    const handleCompetitions = async (e) => {
        e.preventDefault()
        try {
            axios.get(
                "http://localhost:5000/api/v1/events/allcompetitions/competitions"    
            )
            .then((results) => {
                
                setCompetitions(results.data.data.competitions)
                setIsCompetitions(true)
                setIsEvents(false)
                setIsSocieties(false)
                setIsParticipants(false)
            })
            
        }
        catch(err) {
            console.log(err)

        }
    }

    const handleParticipants = async (e) => {
        e.preventDefault()
        try {
            axios.get(
        "http://localhost:5000/api/v1/events/allparticipants/participants"    
            )
            .then((results) => {
                
                setParticipants(results.data.data.participants)
                setIsParticipants(true)
                setIsCompetitions(false)
                setIsEvents(false)
                setIsSocieties(false)
            })
            
        }
        catch(err) {
            console.log(err)

        }
    }

    return (
        <div className="py-3">

        <div className='d-flex justify-content-around'>

        <button onClick={handleSocieties} type ='submit' className='mx-1 py-2 col-1 btn btn-primary'>
            Societies
        </button>


        <button onClick={handleEvents} type ='submit' className='mx-1 py-2 col-1 btn btn-primary'>
            Events
        </button>

        <button onClick={handleCompetitions} type ='submit' className='mx-1 py-2 col-1 btn btn-primary'>
            Competitions
        </button>
        <button onClick={handleParticipants} type ='submit' className='mx-1 py-2 col-1 btn btn-primary'>Participants</button>
         
        <button  type ='submit' className='mx-1 py-2 col-2 btn btn-primary'>Participant Logs</button>
    </div>

        { isSocieties ? <AddSociety /> : <div className=""></div> }
        { isEvents? <AddEvent /> : <div className=""></div> }
        { isCompetitions? <AddCompetition /> : <div className=""></div> }
        { isParticipants? <ParticipantsList /> : <div className=""></div> }

        </div>
  )
}

export default DashboardOptions