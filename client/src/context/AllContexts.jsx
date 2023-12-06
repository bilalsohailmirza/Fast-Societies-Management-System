import {useState, createContext} from "react"

export const SocietiesContext = createContext();
export const EventsContext = createContext();
export const CompetitionsContext = createContext();

export const SocietyContextProvider = (props) => {

    const [societies, setSocieties] = useState([])

    const addSocieties = (society) => {
        setSocieties([...societies, society])
    }
    return (

        <SocietiesContext.Provider value = {
            {societies, setSocieties, viewSocieties: addSocieties}
            }
        >
            {props.children}
        </SocietiesContext.Provider>
    )
}

export const EventContextProvider = (props) => {

    const [events, setEvents] = useState([])

    const viewEvents = (event) => {
        setEvents([...events, event])
    }
    return (

        <EventsContext.Provider value = {
            {events, setEvents, viewEvents}
            }
        >
            {props.children}
        </EventsContext.Provider>
    )
}  

export const CompetitionContextProvider = (props) => {

    const [competitions, setCompetitions] = useState([])

    const viewCompetitions = (competition) => {
        setCompetitions([...competitions, competition])
    }
    return (

        <CompetitionsContext.Provider value = {
            {competitions, setCompetitions, viewCompetitions}
            }
        >
            {props.children}
        </CompetitionsContext.Provider>
    )
}

