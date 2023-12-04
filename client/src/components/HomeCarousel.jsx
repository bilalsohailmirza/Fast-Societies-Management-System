import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

import './homeCarousel.css';

const HomeCarousel = () => {

  return (
    <section className="carousel">

    <Carousel className='mt-3 container' data-bs-theme='dark'>

      <Carousel.Item iterval={5000}>
          <Image 
            className="d-cover w-100"
            src="../src/assets/home/fastbuilding.jpg" 
            alt="Fast Building"
            />
      </Carousel.Item>

      <Carousel.Item interval={3000}>
        <img
            src="../src/assets/home/awards.jpeg" 
            alt="Fast Building"
            className="d-cover w-100"
            />
            <img src="" alt="" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>

      <Carousel.Item iterval={3000}>
        <Image
          className="d-cover w-100"
          src ="../src/assets/home/members.jpeg"
          alt="Fast Building"
          />
      </Carousel.Item>
      </Carousel>
    </section>
    
  );
}

export default HomeCarousel;