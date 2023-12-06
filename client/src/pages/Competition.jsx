import axios from 'axios'
import { useEffect, useContext, useState } from 'react'
import { EventsContext, CompetitionsContext } from '../context/AllContexts'
import { useParams } from 'react-router-dom'

import MainNavbar from '../components/MainNavbar'
import EventDescription from '../components/EventDescription'
import CompetitionForm from '../components/CompetitionForm'

const Competition = () => {

    
    const { competitionId } = useParams()
    console.log("Competition ID:", competitionId)
    // const {societies} = useContext(SocietiesContext)
    const {events, setEvents} = useContext(EventsContext)
    const {competitions, setCompetitions} = useContext(CompetitionsContext)
    const [competition, setCompetition] = useState([])

    console.log("Events: ", events)

        useEffect(() => {
            try{
    
                axios.get(`http://localhost:5000/api/v1/events/${events.EventId}/competitions/${competitionId}`)
                .then((results) => setCompetitions(results.data.data.events))
                
            }catch(err) {
                console.log(err)
            }
            
        }, [setCompetitions])
            
            if(competitions.length > 0){ 
                console.log("Competitions:", competitions)
            }
    
    // const newCompetitions = competitions.map(({
        // CompetitionId: id, CompetitionName: name, CompetitionFee: fee, CompetitionDescription: description, CompetitionDate: date,
        // ...rest
        // }) => ({ id, name, fee, description, date,
        // ...rest
        // }));

        // console.log(newCompetitions)

    return (
        <div className="">
            
            <MainNavbar/ >
            <EventDescription 

                id = {competitions[0].CompetitionId}
                title = {competitions[0].CompetitionName}
                // logo = {competiton.EventLogo}
                fee = {competitions[0].fee}
                description = {competitions[0].CompetitionDescription}
                date = {competitions[0].CompetitionDate}
                // image = {competiton.EventImage}
                // registration = {evcompetitonent.Registration}
            />
            
            {
                <CompetitionForm />
                // <div className=""></div>
            }    
            
            {/* <Footer /> */}
        </div>
        
    )
}

export default Competition;