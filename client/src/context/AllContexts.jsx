import {useState, createContext} from "react"

export const SocietiesContext = createContext();

export const SocietyContextProvider = (props) => {

    const [societies, setSocieties] = useState([])

    const viewSocieties = (restaurant) => {
        setSocieties([...societies, restaurant])
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

