import axios from "axios"

import { useContext } from 'react'
import { CompetitionsContext, EventsContext, LogsContext, ParticipantsContext } from '../context/AllContexts'


const LogsList = () => {

    // const {societies, setSocieties} = useContext(SocietiesContext)
    // const {events, setEvents} = useContext (EventsContext)
    // const {competitions, setCompetitions} = useContext(CompetitionsContext)
    const {participants, setParticipants} = useContext(ParticipantsContext)
    const {logs, setLogs} = useContext(LogsContext)


    // console.log("All COntext Events: ", events)
    const handleDelete = (id, logId) => {
        try {
            axios.get(`http://localhost:5000/api/v1/events/${id}/rollback_participant/`)
            .then((response) => setLogs(logs.filter(log => {
                return log.id !== logId
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
                        <th scope="col">Log Id</th>
                        <th scope="col">Created On</th>
                        <th scope="col">Participant Id</th>
                        <th scope="col">Participant Name</th>
                        <th scope="col">Participant Email</th>
                        <th scope="col">Participant Phone</th>
                        <th scope="col">Delete</th>
                        
                    </tr>
                </thead>

                <tbody className='table-info'>
                    {logs && logs.map((log) => {
                        return (

                        <tr key={log.ParticipantId}>
                            <td>{log.LogId}</td>
                            <td>{log.created_on}</td>
                            <td>{log.ParticipantId}</td>
                            <td>{log.ParticipantName}</td>
                            <td>{log.ParticipantEmail}</td>
                            <td>{log.ParticipantPhone}</td>
                        
                            <td>
                                <button
                                    onClick = {() => {handleDelete(log.ParticipantId, log.LogId)}}
                                    className="btn btn-danger"
                                >
                                    ROLLBACK
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

export default LogsList