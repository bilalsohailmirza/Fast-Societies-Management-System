import Card from 'react-bootstrap/Card';

import "bootstrap/dist/css/bootstrap.min.css";

const MainCard = (props) => {

    return (
        <div className="boder border-info" style={{ width: '15rem'}}>

        <Card  className='d-flex align-items-center bg-info'>
        <Card.Img src={props.image}/>
        <Card.Body>
          <Card.Title className='fw-bold'>{props.title}</Card.Title>
        </Card.Body>
    </Card>
        </div>
    )
}

export default MainCard;