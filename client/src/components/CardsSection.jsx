import "bootstrap/dist/css/bootstrap.min.css";
import MainCard from "./MainCard";

const CardsSection = (props) => {
    const cardValues = props.values
    // console.log(cardValues)
       

    const cardComponents = cardValues.map((card) => {
        if(props.heading === 'Societies' ) {

            if(card.id === 'Procom' || card.id === 'Cbs' || card.id === 'Tlc' || card.id === 'Fdss') {
                
                return (
                    <MainCard 
                        key={card.id} 
                        title={card.name} 
                        image={'../src/assets/home/procom-logo.jpeg'}
                        nature = {props.heading.toLowerCase()}
                    /> 

                )   
            }
        }
        else if (props.heading === 'Events'){
            return(
                <MainCard 
                    key={card.id}
                    id = {card.id}
                    title={card.name} 
                    image={'../src/assets/home/procom-logo.jpeg'}
                    nature = {props.heading.toLowerCase()}
                /> 
                )   
                
        } 
    }
        
    )

    return ( 

        <div className="container mt-4 d-flex flex-column align-items-center">

            <h2 className="mt-4">Featured {props.heading}</h2>
        <div className="mt-4 d-flex flex-row gap-5">
            {cardComponents}
        </div>

        </div>
        
    )
}

export default CardsSection;