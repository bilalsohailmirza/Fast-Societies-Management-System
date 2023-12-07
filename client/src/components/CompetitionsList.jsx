import axios from "axios"

import { useContext } from 'react'
import { CompetitionsContext, EventsContext, SocietiesContext } from '../context/AllContexts'


const CompetitionsList = () => {

    // const {societies, setSocieties} = useContext(SocietiesContext)
    const {events, setEvents} = useContext (EventsContext)
    const {competitions, setCompetitions} = useContext(CompetitionsContext)

    // console.log("All COntext Events: ", events)
    const handleDelete = (id) => {
        try {
            axios.delete(`http://localhost:5000/api/v1/events/competitions/${id}`)
            .then((response) => setCompetitions(competitions.filter(competition => {
                return competition.id !== id
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
                        <th scope="col">Competition Id</th>
                        <th scope="col">Competition Name</th>
                        <th scope="col">Competition Description</th>
                        <th scope="col">Competition Fee</th>
                        <th scope="col">Delete</th>
                        
                    </tr>
                </thead>

                <tbody className='table-info'>
                    {competitions && competitions.map((competition) => {
                        return (

                        <tr key={competition.CompetitionId}>
                            <td>{competition.CompetitionId}</td>
                            <td>{competition.CompetitionName}</td>
                            <td>{competition.CompetitionDescription}</td>
                            <td>{competition.CompetitionFee}</td>
                        
                            <td>
                                <button
                                    onClick = {() => {handleDelete(competition.CompetitionId)}}
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

export default CompetitionsList