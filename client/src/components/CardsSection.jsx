import "bootstrap/dist/css/bootstrap.min.css";
import MainCard from "./MainCard";

const CardsSection = (props) => {
    const cardValues = [
        {
            id: 1,
            title: 'Procom',
            image: '../src/assets/home/procom-logo.jpeg'
        },

        {
            id: 2,
            title: 'ACM',
            image: '../src/assets/home/procom-logo.jpeg'
        },

        {
            id: 3,
            title: 'TLC',
            image: '../src/assets/home/procom-logo.jpeg'
        },

        {
            id: 4,
            title: 'GDSC',
            image: '../src/assets/home/procom-logo.jpeg'
        },
    ] 

    const cardComponents = cardValues.map(card => (
        <MainCard key={card.id} title={card.title} image={card.image} />
    ))

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