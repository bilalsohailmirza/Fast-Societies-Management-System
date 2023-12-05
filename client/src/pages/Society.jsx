import axios from 'axios'
import { useEffect, useContext } from 'react'
import { SocietiesContext, EventsContext } from '../context/AllContexts'
import { useLocation, useParams } from 'react-router-dom'

import MainNavbar from "../components/MainNavbar"
import Footer from '../components/Footer'
import DescriptionSection from '../components/DescriptionSection'

const Society = (props) => {

    const location = useLocation()
    console.log(location)
    // const {type} = useParams()
    // const stateParamVal = useLocation().state
    // console.log("Param: ", type)
    // console.log("State Param Val: ", stateParamVal)
    const id = location.state.id 
    console.log(id)

    const {societies, setSocieties} = useContext(SocietiesContext)
    
    // console.log(handle)
    
    useEffect(() => {
        try{

            axios.get(`http://localhost:5000/api/v1/societies/${id}`)
            .then((results) => setSocieties(results.data.data.societies))
            
        }catch(err) {
            console.log(err)
        }
        if(societies.length > 0) {
            console.log(societies)
        }
    }, [setSocieties])

    return (
        <div className="">
            <MainNavbar />
            <DescriptionSection 
                id = {societies[0].SocietyId}
                title = {societies[0].SocietyName}
                // image = {}
                // description = {}
            />
            <Footer />
        </div>
        
    )
}

export default Society;