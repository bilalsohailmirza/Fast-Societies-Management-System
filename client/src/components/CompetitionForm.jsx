// import Form from 'react-bootstrap/Form';
import { useState, useContext } from 'react';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import { useParams } from 'react-router-dom';


import { EventsContext } from '../context/AllContexts';

const CompetitionForm = () => {

    const {events} = useContext(EventsContext)
    const [participantName, setName] = useState('')
    const [participantEmail, setEmail] = useState('')
    const [participantPhone, setPhone] = useState('')
    
    const {competitionId} = useParams()

    // console.log("Param from From Component: ", competitionId)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const participantId = faker.string.uuid()
        console.log(participantId)

        try {
            axios.post(
                `http://localhost:5000/api/v1/events/${events.EventId}/competitions/${competitionId}/participants`,
                {
                    'attendeeId': participantId,
                    'attendeeName': participantName, 
                    'attendeeEmail': participantEmail, 
                    'attendeePhone': participantPhone,
                }
            )
            .then((response) => console.log(response))

            }catch(err) {
            console.log(err)
        }
    }    

    return (

        <div className='my-4 px-5'>

        <h3 className='py-3'>Register Below</h3>
        <form action="">

            <div className="d-flex flex-direction-column">

                <div className="">
                    <input
                    value = {participantName}
                    onChange = {(e) => setName(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder='Name'
                    />
                </div>

                <div className="col mx-1">
                    <input 
                    value = {participantEmail}
                    onChange = {(e) => setEmail(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder='email@example.com'
                    />
                </div>

                <div className="col-2 mx-1">

                    <input
                    value = {participantPhone}
                    onChange = {(e) => setPhone(e.target.value)}
                    type='text'
                    className="form-control"
                    placeholder='Phone Number'
                    />
                       

                </div>

                <button onClick={handleSubmit} type = 'submit' className='mx-1 col-1 btn btn-primary'>Submit</button>

            </div>
        </form>
    </div>
    )
}

export default CompetitionForm;