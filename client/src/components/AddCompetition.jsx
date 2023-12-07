import axios from 'axios' 
import { useContext, useEffect, useState } from 'react'

import { SocietiesContext, EventsContext, CompetitionsContext } from '../context/AllContexts'
import CompetitionsList from './CompetitionsList' 


const AddCompetition = () => {

    // const {addEvents} = useContext(EventsContext)
    const {addCompetitions} = useContext(CompetitionsContext)

    const [eventId, setEventId] = useState('')
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [fee, setFee] = useState('')
    const [description, setDescription] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            axios.post(
                `http://localhost:5000/api/v1/events/${eventId}/competitions/`,
                {
                    'competitionId': id,  
                    'competitionName': name,
                    'competitionFee': fee, 
                    // 'eventDate': date,
                    'competitionDesc': description,
                }
            )
            .then((response) => addCompetitions(response.data.data.competition))

        }catch(err) {
            console.log(err)
        }
    }

    // useEffect(() => {
        
    //     handleSubmit()
    // })


  return (
    <div className='border-dark'>
      <div className='my-4'>
        <form action="">

            <div className="mb-3 flex-row d-flex justify-content-evenly">

                 <div className=" mx-1">
                    
                    <input
                    value = {eventId}
                    onChange = {(e) => setEventId(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Event ID'
                    />
                </div>

                <div className=" mx-1">
                    
                    <input
                    value = {id}
                    onChange = {(e) => setId(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Competition ID'
                    />
                </div>

                <div className="mx-1">
                    <input 
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Name'
                    />
                </div>

                <div className="mx-1">
                    <input 
                    value = {fee}
                    onChange = {(e) => setFee(e.target.value)}
                    type="number" 
                    className="form-control" 
                    placeholder='Enter Fee'
                    />
                </div>

                    <button onClick={handleSubmit}  type = 'submit' className='mx-1 col-1 btn btn-success'>Add</button>
            </div>
                <div className="mx-5">
                    {/* <input 
                    value = {description}
                    onChange = {(e) => setDescription(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Description'
                    /> */}
                    <textarea 
                        value={description} 
                        onChange = {(e) => setDescription(e.target.value)}
                        className="form-control"
                        placeholder='Enter Description'
                        type="text"
                        rows="4" cols="20"
                    >
                    </textarea>
                </div>



        </form>
    </div>
        <CompetitionsList />
    </div>
  )
}

export default AddCompetition