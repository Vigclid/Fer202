import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import myPicture1 from '../assests/image/1.png'
import myPicture2 from '../assests/image/2.png'
import myPicture3 from '../assests/image/3.png'
import {memo} from 'react'


const Banner = () => {
  const carouselItems = [
    {
      image: myPicture1,
      title: "Frostdrawl | Gran Sudanruska",
      description: `"In her dying breaths, Sudaruska the Unbroken infused her very being into this weapon, cutting through hundreds of ancient Ministry as the last 
      front to keep Minityrsa safe. Now that her mortal shell is no more, she has become Gran Sudaruska."`
    },
    {
      image: myPicture2,
      title: "Bloodrend | Scholar of the Crimson Contract",
      description: `"A twisted weapon devised by the Scholar of the Burning Blood, Chaser, during his apprenticeship under the Second Prophet. A seething concoction 
      of tainted blood swirls within, waiting to be unburdened of its prison."`
    },
    {
      image: myPicture3,
      title: "Jetstriker | Abyss Wanderer Plate",
      description: `"Washed ashore in an unfamiliar place, you find hospitality within the Kingdom of Etrea."`
    }
  ];
  return (
    <Carousel>
    {carouselItems.map((item, index) => (
      <Carousel.Item key={index}>
        <Image src={item.image} fluid className="carousel-image" />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <i>{item.description}</i>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
  );
}

export default memo(Banner);