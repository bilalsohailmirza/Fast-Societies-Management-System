import axios from 'axios'
import { useEffect, useContext } from 'react'
import { SocietiesContext, EventsContext } from '../context/AllContexts'

import MainNavbar from "../components/MainNavbar"
import Footer from '../components/Footer'
import DetailSection from '../components/DetailSection'

const AllSocieties = () => {

    const {societies, setSocieties} = useContext(SocietiesContext)
    const {events, setEvents} = useContext(EventsContext)

    useEffect(() => {
        try{

            axios.get("http://localhost:5000/api/v1/societies/")
            .then((results) => setSocieties(results.data.data.societies))
            
        }catch(err) {
            console.log(err)
        }
        if(societies.length > 0) {
            // console.log(societies)
        }
    }, [setSocieties])


    
    const newSocieties = societies.map(({
        SocietyId: id, SocietyName: name, SocietyLogo: logo, SocietyDescription: description, SocietyImage: image,
        ...rest
      }) => ({ id, name, logo, description, image,
        ...rest
      }));

    // console.log(newSocieties)

    const detailComponents = newSocieties.map((society) => {
                
            return (
                
                <DetailSection 
                    key={society.id}
                    id = {society.id} 
                    title={society.name} 
                    image={society.image}
                    description={society.description}
                    // nature = {props.heading.toLowerCase()}
                /> 

            )
        })
            
    return (
        <div className="">

        {/* <MainNavbar /> */}
        {detailComponents}
        <Footer />

        </div>
    )
    
}

export default AllSocieties;
