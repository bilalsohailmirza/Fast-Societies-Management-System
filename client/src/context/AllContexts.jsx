import {useState, createContext} from "react"

export const SocietiesContext = createContext();
export const EventsContext = createContext();


export const SocietyContextProvider = (props) => {

    const [societies, setSocieties] = useState([])

    const viewSocieties = (society) => {
        setSocieties([...societies, society])
    }
    return (

        <SocietiesContext.Provider value = {
            {societies, setSocieties, viewSocieties}
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

