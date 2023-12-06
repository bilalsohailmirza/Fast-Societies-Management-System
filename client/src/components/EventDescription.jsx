import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// import './DescriptionSection.css';
import Form  from "./Form";
const EventDescription = (props) => {
    // console.log(props)
    
    
    return (

        <div className="">
            <div className="m-3 d-flex justify-content-between">
                <div className="detailDesc">
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>

                <div className="detailImage">
                    <img src = {props.image} alt="Event Image" />
                </div>
                {/* <Form /> */}
            </div>
                <div className="my-5 mx-3">
                    <h4 className="py-3">Fee: {props.fee}</h4>
                    <h4 className="py-3">Scheduled Date: {props.date}</h4>
                </div>
        </div>
    )
}

export default EventDescription;