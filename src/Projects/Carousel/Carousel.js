import { useEffect, useState } from "react";
import "./style.css";
export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  let timeout;
  const items = [
    {
      image:
        "https://cdn.pixabay.com/photo/2023/10/26/08/24/autumn-8342089_640.jpg",
      alt: "autumn",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
      alt: "cat",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2022/12/06/13/59/dog-7639052_640.jpg",
      alt: "dog",
    },
  ];
  //handlers
  const leftClickHandler = () => {
    setCurrentSlide(currentSlide === 0 ? items.length - 1 : currentSlide - 1);
  };
  const rightClickHandler = () => {
    setCurrentSlide(currentSlide === items.length - 1 ? 0 : currentSlide + 1);
  };

  //autoplay
  useEffect(() => {
    timeout =
      autoplay &&
      setTimeout(() => {
        rightClickHandler();
      }, 1500);
  });

  return (
    <>
      <div className="carousel-container">
        <div className="carousel">
          {items.map(({ image, alt }, index) => (
            <img
              src={image}
              alt={alt}
              key={index}
              className={
                index === currentSlide ? "image " : "image inactive-image"
              }
              onMouseEnter={() => {
                setAutoplay(false);
                clearTimeout(timeout);
              }}
              onMouseLeave={() => setAutoplay(true)}
            ></img>
          ))}
        </div>
        <>
          <button
            className="left-button button"
            onClick={() => leftClickHandler()}
          >
            ◀
          </button>
          <button
            className="right-button button"
            onClick={() => rightClickHandler()}
          >
            ▶
          </button>
        </>
        <div className="dots-container">
          {items.map((_, index) => (
            <div
              key={index}
              className={index === currentSlide ? "dot current-dot" : "dot"}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
};
