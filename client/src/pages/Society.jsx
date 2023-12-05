import axios from 'axios'
import { useEffect, useContext } from 'react'
import { SocietiesContext, EventsContext } from '../context/AllContexts'
import { useLocation } from 'react-router-dom'

import MainNavbar from "../components/MainNavbar"
import Footer from '../components/Footer'
import DescriptionSection from '../components/DescriptionSection'
import CardsSection from '../components/CardsSection'

const Society = (props) => {

    const location = useLocation()
    console.log(location)
    const id = location.state.id 
    console.log(id)

    const {societies, setSocieties} = useContext(SocietiesContext)
    const {events, setEvents} = useContext(EventsContext)
    // console.log(handle)
    
    useEffect(() => {
        try{

            axios.get(`http://localhost:5000/api/v1/societies/${id}`)
            .then((results) => setSocieties(results.data.data.societies))
            
        }catch(err) {
            console.log(err)
        }
        if(societies.length > 0) {
            // console.log(societies)
        }
    }, [setSocieties])

    useEffect(() => {
        try{

            axios.get(`http://localhost:5000/api/v1/societies/${id}/events`)
            .then((results) => setEvents(results.data.data.events))
            
        }catch(err) {
            console.log(err)
        }
        
    }, [setEvents])
        
        if(events.length > 0){ 
            console.log(events)
        }


    const newEvents = events.map(({
        EventId: id, EventName: name, EventLogo: logo, EventFee: fee, EventDescription: description,
        EventDate: date, SocietyId: sid,
        ...rest
        }) => ({ id, name, logo, fee, description, date, sid,
        ...rest
        }));

        console.log(newEvents)


    return (
        <div className="">
            <MainNavbar />
            <DescriptionSection 
                id = {societies[0].SocietyId}
                title = {societies[0].SocietyName}
                // image = {}
                // description = {}
            />
            <CardsSection heading = {"events"} values = {newEvents} />
            <Footer />
        </div>
        
    )
}

export default Society;