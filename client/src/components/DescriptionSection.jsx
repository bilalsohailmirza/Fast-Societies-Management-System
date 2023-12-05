import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

// import './DescriptionSection.css';

const DescriptionSection = (props) => {
    console.log(props)
    return (

        <div className="m-3 d-flex justify-content-between">
            <div className="detailDesc">
                {/* <Link to = {`/societies/${props.id}`}> */}
                <h1>{props.title}</h1>
                {/* </Link> */}
                <p>{props.description}</p>
            </div>

            <div className="detailImage">
                <img src = {props.image} alt="Event Image" />
            </div>
        </div>
    )
}

export default DescriptionSection;