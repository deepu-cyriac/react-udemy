import { Carousel } from "react-bootstrap";

import "./Banner.css";

const Banner: React.FC = () => {
  return (
    <Carousel controls={false} indicators={false} interval={5000} wrap={true}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.alphacoders.com/137/1378574.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images5.alphacoders.com/319/thumb-1920-319730.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images7.alphacoders.com/718/thumb-1920-718521.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images3.alphacoders.com/887/thumb-1920-887499.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
