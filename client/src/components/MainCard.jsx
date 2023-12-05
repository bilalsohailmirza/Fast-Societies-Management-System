import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

const MainCard = (props) => {

    // console.log(props)

    return (
        <div className="boder border-info" style={{ width: '15rem'}}>
            <Link to = {`/${props.nature}/${props.id}`}>
            <Card  className='d-flex align-items-center bg-info'>
                <Card.Img src={props.image}/>
                <Card.Body>
                <Card.Title className='fw-bold'>{props.title}</Card.Title>
                </Card.Body>
            </Card>
            </Link>    
        </div>
    )
}

export default MainCard;