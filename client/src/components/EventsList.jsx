import axios from "axios"

import { useContext } from 'react'
import { CompetitionsContext, EventsContext, SocietiesContext } from '../context/AllContexts'


const EventsList = () => {

    const {societies, setSocieties} = useContext(SocietiesContext)
    const {events, setEvents} = useContext (EventsContext)
    // const {competitions, setCompetitions} = useContext(CompetitionsContext)
    console.log("All COntext Events: ", events)
    const handleDelete = (id) => {
        try {
            axios.delete(`http://localhost:5000/api/v1/societies/events/${id}`)
            .then((response) => setEvents(events.filter(event => {
                return event.id !== id
            })))

        }catch(err) {
            console.log(err)
        }
    }


  return (
    <div className="my-2">
        <div className='list-group text-center my-2'>
            <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr className="">
                        <th scope="col">Event Id</th>
                        <th scope="col">Event Name</th>
                        <th scope="col">Event Description</th>
                        <th scope="col">Event Fee</th>
                        <th scope="col">Delete</th>
                        
                    </tr>
                </thead>

                <tbody className='table-info'>
                    {events && events.map((event) => {
                        return (

                        <tr key={event.EventId}>
                            <td>{event.EventId}</td>
                            <td>{event.EventName}</td>
                            <td>{event.EventDescription}</td>
                            <td>{event.EventFee}</td>
                        
                            <td>
                                <button
                                    onClick = {() => {handleDelete(event.EventId)}}
                                    className="btn btn-danger"
                                >
                                    DELETE
                                </button>
                            </td>
                        </tr>
                        )
                    } )}
                
                </tbody>
            </table>
         </div>

    </div>
  )
}

export default EventsList