// import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    
    const param = useParams()

    console.log("Param from From Component: ", param.eventId)
    const handleSubmit = async (e) => {
        e.preventDefault()

        const attendeeId = faker.string.uuid()
        console.log(attendeeId)

        try {
            axios.post(
                `http://localhost:5000/api/v1/events/${param.eventId}/attendees/`,
                {
                    'attendeeId': attendeeId,
                    'attendeeName': name, 
                    'attendeeEmail': email, 
                    'attendeePhone': phone,
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
                    value = {name}
                    onChange = {(e) => setName(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder='Name'
                    />
                </div>

                <div className="col mx-1">
                    <input 
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder='email@example.com'
                    />
                </div>

                <div className="col-2 mx-1">

                    <input
                    value = {phone}
                    onChange = {(e) => setPhone(e.target.value)}
                    type='text'
                    className="form-control"
                    placeholder='Phone Number'
                    />
                       

                </div>

                <button onClick={handleSubmit} type = 'submit' className='mx-1 col-1 btn btn-primary'>Add</button>

            </div>
        </form>
    </div>
    )
}

export default Form;