import axios from 'axios'
import { useEffect, useContext, useState } from 'react'
import { SocietiesContext, EventsContext } from '../context/AllContexts'
import { useLocation, useParams } from 'react-router-dom'

import Footer from '../components/Footer'
import EventDescription from '../components/EventDescription'


const Event = (props) => {

    
    const { eventId }= useParams()
    // console.log("Event Param: ", eventId)
    const {societies, setSocieties} = useContext(SocietiesContext)
    const {events, setEvents} = useContext(EventsContext)
    const [event, setEvent] = useState({})

    // console.log("Society ID: ", societies)

    useEffect(() => {
        try{

            axios.get(`http://localhost:5000/api/v1/societies/${societies.SocietyId}/events/${eventId}`)
            .then((results) => setEvent(results.data.data.events[0]))
            
        }catch(err) {
            console.log(err)
        }
        
    }, [setEvents])
        
        if(events.length > 0){ 
            // console.log(events)
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
            
            <EventDescription 
                id = {event.EventId}
                title = {event.EventName}
                image = {event.EventLogo}
                description = {event.Description}
            />

            {/* <Footer /> */}
        </div>
        
    )
}

export default Event;