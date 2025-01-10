import { Carousel } from "react-bootstrap";

import "./Banner.css";

const Banner: React.FC = () => {
  return (
    <Carousel controls={false} indicators={false} interval={5000} wrap={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/221016/pexels-photo-221016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/878297/pexels-photo-878297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
