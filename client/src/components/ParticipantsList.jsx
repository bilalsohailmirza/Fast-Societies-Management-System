import axios from "axios"

import { useContext } from 'react'
import { CompetitionsContext, EventsContext, ParticipantsContext } from '../context/AllContexts'


const ParticipantsList = () => {

    // const {societies, setSocieties} = useContext(SocietiesContext)
    const {events, setEvents} = useContext (EventsContext)
    const {competitions, setCompetitions} = useContext(CompetitionsContext)
    const {participants, setParticipants} = useContext(ParticipantsContext)

    // console.log("All COntext Events: ", events)
    const handleDelete = (id) => {
        try {
            axios.delete(`http://localhost:5000/api/v1/events/${id}`)
            .then((response) => setParticipants(participants.filter(participant => {
                return participant.id !== id
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
                        <th scope="col">Participant Id</th>
                        <th scope="col">Participant Name</th>
                        <th scope="col">Participant Email</th>
                        <th scope="col">Participant Phone</th>
                        <th scope="col">Delete</th>
                        
                    </tr>
                </thead>

                <tbody className='table-info'>
                    {participants && participants.map((participant) => {
                        return (

                        <tr key={participant.ParticipantId}>
                            <td>{participant.ParticipantId}</td>
                            <td>{participant.ParticipantName}</td>
                            <td>{participant.ParticipantEmail}</td>
                            <td>{participant.ParticipantPhone}</td>
                        
                            <td>
                                <button
                                    onClick = {() => {handleDelete(participant.ParticipantId)}}
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

export default ParticipantsList