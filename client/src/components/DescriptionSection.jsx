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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quam repellat velit, temporibus ipsum qui quis fugit doloremque dolores cupiditate earum laborum deleniti inventore, fugiat porro sint impedit. Animi et dolor quas illo, repellat iure ullam molestias voluptatum cumque tempora corporis, eum fugit quaerat quo beatae. Et, reiciendis earum! Dolore fugiat rerum aperiam quibusdam saepe accusantium ea, earum laudantium optio enim corporis ratione minima voluptate quasi vero totam et exercitationem amet incidunt veritatis? Velit explicabo reprehenderit quas qui, a voluptatibus. Ab commodi odio et facere cum fugit porro neque, quia unde labore repudiandae officia hic aliquam facilis sint excepturi voluptates.</p>
            </div>

            <div className="detailImage">
                <img src = "../src/assets/event/procom.jpg" alt="Event Image" />
            </div>
        </div>
    )
}

export default DescriptionSection;