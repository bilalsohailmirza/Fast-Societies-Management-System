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

    const addEvents = (event) => {
        setEvents([...events, event])
    }
    return (

        <EventsContext.Provider value = {
            {events, setEvents, addEvents}
            }
        >
            {props.children}
        </EventsContext.Provider>
    )
}  

export const CompetitionContextProvider = (props) => {

    const [competitions, setCompetitions] = useState([])

    const addCompetitions = (competition) => {
        setCompetitions([...competitions, competition])
    }
    return (

        <CompetitionsContext.Provider value = {
            {competitions, setCompetitions, addCompetitions}
            }
        >
            {props.children}
        </CompetitionsContext.Provider>
    )
}

