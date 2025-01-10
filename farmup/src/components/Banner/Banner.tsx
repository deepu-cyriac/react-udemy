import { useState, useEffect } from "react";

import "./Banner.css";

const Banner: React.FC = () => {
  const images: Number[] = [0, 1, 2];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>This is the banner! {index}</p>
    </div>
  );
};

export default Banner;
