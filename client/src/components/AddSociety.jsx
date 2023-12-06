import axios from 'axios' 
import { useContext, useEffect, useState } from 'react'

import { SocietiesContext } from '../context/AllContexts'
import SocietiesList from './SocietiesList'


const AddSociety = () => {

    const {addSocieties} = useContext(SocietiesContext)

    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            axios.post(
                "http://localhost:5000/api/v1/societies",
                {
                    'SocietyId': id, 
                    'SocietyName': name, 
                    'SocietyDescription': description,
                }
            )
            .then((response) => addSocieties(response.data.data.society))

        }catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        
        handleSubmit()
    })


  return (
    <div className='border-dark'>
      <div className='my-4'>
        <form action="">

            <div className="mb-3 flex-row d-flex justify-content-evenly">

                <div className=" mx-1">
                    
                    <input
                    value = {id}
                    onChange = {(e) => setId(e.target.value)}
                    type="text" 
                    className="form-control" 
                    placeholder='Enter ID'
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
                        At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                    </textarea>
                </div>



        </form>
    </div>
        <SocietiesList />
    </div>
  )
}

export default AddSociety