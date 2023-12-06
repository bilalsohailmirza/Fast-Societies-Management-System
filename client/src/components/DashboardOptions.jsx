import axios from 'axios'

import { useContext, useState } from 'react'
import { CompetitionsContext, EventsContext, SocietiesContext } from '../context/AllContexts'

import SocietiesList from './SocietiesList'

const DashboardOptions = () => {

    
    // contexts
    const { societies, setSocieties} = useContext(SocietiesContext)
    const {events, setEvents} = useContext (EventsContext)
    const {competitions, setCompetitions} = useContext(CompetitionsContext)

    //local states
    const [isSocieties, setIsSocieties] = useState(false)
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
            })
            
        }
        catch(err) {
            console.log(err)

            return false
        }
        return true
    }
    
    return (
        <div className="py-3">

        <div className='d-flex justify-content-around'>
        <button onClick={handleSocieties} type ='submit' className='mx-1 py-2 col-1 btn btn-primary'>Societies</button>
        <button  type ='submit' className='mx-1 py-2 col-1 btn btn-primary'>Teams</button>
        <button  type ='submit' className='mx-1 py-2 col-1 btn btn-primary'>Events</button>
        <button  type ='submit' className='mx-1 py-2 col-1 btn btn-primary'>Competitions</button>
        <button  type ='submit' className='mx-1 py-2 col-1 btn btn-primary'>Participants</button>
         
    </div>

       { isSocieties ? <SocietiesList /> : <div className=""></div> }

        </div>
  )
}

export default DashboardOptions