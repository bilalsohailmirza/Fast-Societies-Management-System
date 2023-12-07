import {useState, createContext} from "react"

export const SocietiesContext = createContext();
export const EventsContext = createContext();
export const CompetitionsContext = createContext();
export const ParticipantsContext = createContext();
export const LogsContext = createContext();

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

export const ParticipantContextProvider = (props) => {

    const [participants, setParticipants] = useState([])

    const addParticipants = (participant) => {
        setParticipants([...participants, participant])
    }
    return (

        <ParticipantsContext.Provider value = {
            {participants, setParticipants, addParticipants}
            }
        >
            {props.children}
        </ParticipantsContext.Provider>
    )
}


export const LogsContextProvider = (props) => {

    const [logs, setLogs] = useState([])

    const addLogs = (log) => {
        setLogs([...logs, log])
    }
    return (

        <LogsContext.Provider value = {
            {logs, setLogs, addLogs}
            }
        >
            {props.children}
        </LogsContext.Provider>
    )
}