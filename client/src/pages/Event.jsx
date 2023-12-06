import axios from 'axios'
import { useEffect, useContext, useState } from 'react'
import { SocietiesContext, EventsContext, CompetitionsContext } from '../context/AllContexts'
import { useParams } from 'react-router-dom'


import EventDescription from '../components/EventDescription'
import EventForm from '../components/EventForm'
import CardsSection from '../components/CardsSection'

const Event = () => {

    
    const { eventId } = useParams()

    const {societies} = useContext(SocietiesContext)
    const {events, setEvents} = useContext(EventsContext)
    const {competitions, setCompetitions} = useContext(CompetitionsContext)
    const [event, setEvent] = useState({})

    // console.log("Society ID: ", societies)

    useEffect(() => {
        try{

            axios.get(`http://localhost:5000/api/v1/societies/${societies.SocietyId}/events/${eventId}`)
            .then((results) => setEvents(results.data.data.events[0]))
            
        }catch(err) {
            console.log(err)
        }
        
    }, [setEvents])
        
        if(events.length > 0){ 
            // console.log(events)
        }

        useEffect(() => {
            try{
    
                axios.get(`http://localhost:5000/api/v1/events/${eventId}/competitions`)
                .then((results) => setCompetitions(results.data.data.events))
                
            }catch(err) {
                console.log(err)
            }
            
        }, [setCompetitions])
            
            if(events.length > 0){ 
                // console.log(competitions)
            }
    // const newEvents = events.map(({
    //     EventId: id, EventName: name, EventLogo: logo, EventFee: fee, EventDescription: description, EventDate: date, EventImage: image, Registration: registration,
    //     SocietyId: sid,
    //     ...rest
    //     }) => ({ id, name, logo, fee, description, date, sid, image, registration,
    //     ...rest
    //     }));

    //     console.log(newEvents)
    const newCompetitions = competitions.map(({
        CompetitionId: id, CompetitionName: name, CompetitionFee: fee, CompetitionDescription: description, CompetitionDate: date, EventId: parentId,
        ...rest
        }) => ({ id, name, fee, description, date, parentId,
        ...rest
        }));

        console.log(newCompetitions)

    return (
        <div className="">
            
            <EventDescription 

                id = {events.EventId}
                title = {events.EventName}
                logo = {events.EventLogo}
                fee = {events.EventFee}
                description = {events.Description}
                date = {events.EventDate}
                image = {events.EventImage}
                registration = {events.Registration}
            />
            
            {events.Registration ? <EventForm idValue = {events.EventId} />        
                : 
                <CardsSection heading = {"competition"} values = {newCompetitions} />
                // <div className=""></div>
            }    
            
            
        </div>
        
    )
}

export default Event;