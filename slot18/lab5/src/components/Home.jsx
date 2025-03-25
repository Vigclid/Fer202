import { Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


export const Home = ({newLists}) => {
    
    return (
        <>
  <Row>
    <Carousel>
      <Carousel.Item>
        <img className="w-100" src={`/images/slide1.jpg`} alt="Slide 1" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={`/images/slide2.jpg`} alt="Slide 2" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="w-100" src={`/images/slide3.jpg`} alt="Slide 3" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Row>

  <Row className="d-flex justify-content-center mt-4">
    <img className="rounded-circle" style={{ width: '100px', height: '100px', margin: '0 70px' }} src={`/images/menu-01.jpg`} alt="Menu 1" />
    <img className="rounded-circle" style={{ width: '100px', height: '100px', margin: '0 70px' }} src={`/images/menu-03.jpg`} alt="Menu 2" />
    <img className="rounded-circle" style={{ width: '100px', height: '100px', margin: '0 70px' }} src={`/images/menu-04.jpg`} alt="Menu 3" />
    <img className="rounded-circle" style={{ width: '100px', height: '100px', margin: '0 70px' }} src={`/images/menu-05.jpg`} alt="Menu 4" />
    <img className="rounded-circle" style={{ width: '100px', height: '100px', margin: '0 70px' }} src={`/images/menu-06.jpg`} alt="Menu 5" />
  </Row>
  <h3 style={{color:'red'}}>
    This is home page!
  </h3>
</>

    )
}