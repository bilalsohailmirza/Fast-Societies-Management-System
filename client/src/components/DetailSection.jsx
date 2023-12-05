import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

import './DetailSection.css';

const DetailSection = (props) => {


    let navigate = useNavigate()
    // console.log(props)
    const handleClick = (e, id) => {
        e.stopPropagation();
        navigate(`/societies/${id}`, {replace: true, state:{id}});
    }

    return (

        <div className="m-3 d-flex justify-content-between">
            <div className="detailDesc">
                <button
                    onClick={(e) => handleClick(e, props.id)}
                    > 
                <h1>{props.title}</h1>
                </button>
                <p className="my-4 fw-bold">{props.description} </p>
            </div>

            <div className="detailImage">
                <img src = {props.image} alt="Event Image" />
            </div>
        </div>
    )
}

export default DetailSection;