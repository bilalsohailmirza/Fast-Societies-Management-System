import axios from 'axios'
import { useEffect, useContext } from 'react'
import { SocietiesContext, EventsContext } from '../context/AllContexts'

import MainNavbar from "../components/MainNavbar"
import HomeCarousel from "../components/HomeCarousel"
import CardsSection from "../components/CardsSection"
import Footer from '../components/Footer'


const Home = () => {

    const {societies, setSocieties} = useContext(SocietiesContext)
    const {events, setEvents} = useContext(EventsContext)

    useEffect(() => {
            try{

                axios.get("http://localhost:5000/api/v1/societies")
                .then((results) => setSocieties(results.data.data.societies))
                
            }catch(err) {
                console.log(err)
            }
            
        }, [setSocieties])

    useEffect(() => {
        try{

            axios.get("http://localhost:5000/api/v1/featured")
            .then((results) => setEvents(results.data.data.events))
            
        }catch(err) {
            console.log(err)
        }
        
    }, [setEvents])
        
        if(events.length > 0){ 
            console.log(events)
        } 

        
        const newSocieties = societies.map(({
            SocietyId: id, SocietyName: name, SocietyLogo: logo, SocietyDescription: description,
            ...rest
          }) => ({ id, name, logo, description,
            ...rest
          }));


        const newEvents = events.map(({
            EventId: id, EventName: name, EventLogo: logo, EventFee: fee, EventDescription: description,
            EventDate: date, SocietyId: sid,
            ...rest
          }) => ({ id, name, logo, fee, description, date, sid,
            ...rest
          }));
    return (
        <>
        <MainNavbar/ >
        <HomeCarousel />
        <CardsSection heading={"Societies"} values = {newSocieties} />
        <CardsSection heading = {"Events"} values = {newEvents} />
        <Footer />
        </>
    )
}

export default Home;