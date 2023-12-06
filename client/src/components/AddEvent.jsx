import axios from 'axios' 
import { useContext, useEffect, useState } from 'react'

import { SocietiesContext, EventsContext } from '../context/AllContexts'
import EventsList from './EventsList' 


const AddEvent = () => {

    const {addEvents} = useContext(EventsContext)

    const [societyId, setSocietyId] = useState('')
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const initialValue = null
    const [fee, setFee] = useState('')
    const [description, setDescription] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            axios.post(
                `http://localhost:5000/api/v1/societies/${societyId}/events`,
                {
                    'eventId': id,  
                    'eventName': name,
                    'evetFee': fee, 
                    // 'eventDate': date,
                    'eventDesc': description,
                }
            )
            .then((response) => addEvents(response.data.data.society))

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
                    value = {societyId}
                    onChange = {(e) => setSocietyId(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Society ID'
                    />
                </div>

                <div className=" mx-1">
                    
                    <input
                    value = {id}
                    onChange = {(e) => setId(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder='Enter Event ID'
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
        <EventsList />
    </div>
  )
}

export default AddEvent