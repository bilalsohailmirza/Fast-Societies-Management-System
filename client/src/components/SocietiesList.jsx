import axios from "axios"

import { useContext } from 'react'
import { CompetitionsContext, EventsContext, SocietiesContext } from '../context/AllContexts'


const SocietiesList = () => {

    const {societies, setSocieties} = useContext(SocietiesContext)
    // const {events, setEvents} = useContext (EventsContext)
    // const {competitions, setCompetitions} = useContext(CompetitionsContext)

    const handleDelete = (id) => {
        try {
            axios.delete(`http://localhost:5000/api/v1/restaurants/${id}`)
            .then((response) => setSocieties(societies.filter(society => {
                return society.id !== id
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
                        <th scope="col">SocietyId</th>
                        <th scope="col">SocietyName</th>
                        <th scope="col">SocietyDescription</th>
                        <th scope="col">Delete</th>
                        
                    </tr>
                </thead>

                <tbody className='table-info'>
                    {societies && societies.map((society) => {
                        return (

                        <tr key={society.SocietyId}>
                            <td>{society.SocietyId}</td>
                            <td>{society.SocietyName}</td>
                            <td>{society.SocietyDescription}</td>
                        
                            <td>
                                <button
                                    onClick = {() => {handleDelete(society.SocietyId)}}
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

export default SocietiesList