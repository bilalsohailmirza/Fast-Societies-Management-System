import axios from 'axios'
import { useEffect } from 'react'
import { SocietiesContext } from '../context/AllContexts'

import MainNavbar from "../components/MainNavbar"
import HomeCarousel from "../components/HomeCarousel"
import CardsSection from "../components/CardsSection"

const 
const Home = () => {

useEffect(() => {
            try{

                axios.get("http://localhost:5000/api/v1/restaurants")
                .then((results) => setRestaurants(results.data.data.restaurants))
                
            }catch(err) {
                console.log(err)
            }
            
        }, [setRestaurants])
        
        if(restaurants.length > 0){ 
            console.log(restaurants) 
        } 



    return (
        <>
        <MainNavbar/ >
        <HomeCarousel   / >
        <CardsSection heading={'Societies'} />
        <CardsSection heading={'Events'} />
        </>
    )
}

export default Home;