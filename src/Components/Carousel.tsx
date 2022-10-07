import React, {useCallback, useMemo, useState} from 'react';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import './Carousel.css'

interface ICarouselProps {
  product: IProductObject;
  productId: String | undefined;
}

interface IProductObject {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  currency: string;
  images: Array<string>
}

const Carousel = (props: ICarouselProps) => {
  const [activeImage, setActiveImage] = useState(0)

  const prevImage = () => {
    if (!activeImage && activeImage !== 0) return
    if (activeImage > 0) setActiveImage(prevImage => prevImage - 1)
    if (activeImage === 0) setActiveImage(props.product.images.length - 1)
  }

  const nextImage = () => {
    if (!activeImage && activeImage !== 0) return
    if (activeImage < props.product.images.length - 1) setActiveImage(prevImage => prevImage + 1)
    if (activeImage === props.product.images.length - 1) setActiveImage(0)
  }

  const renderImages = useMemo(() => {
    return props.product.images.map((image: string, index: number) => {
      return <img onClick={() => setActiveImage(index)}
                  className={`carousel-imagelist ${activeImage === index ? "carousel-active" : ""}`}
                  src={image}
                  alt="coffee machine"
                  key={index} id={`image-${index}`}/>
    })
  }, [activeImage])

  return (
      <div>
        <div className="carousel">
          <button onClick={prevImage}
                  className="carousel-button cbtn-prev"
                  style={{justifySelf: "start"}}>
            <BsChevronLeft style={{
              fontSize: "22px",
              strokeWidth: "1px",
              marginRight: "3px"
            }}/>
          </button>
          <img className="carousel-featured-image"
               src={props.product.images[activeImage]}
               alt="coffee machine"/>
          <button onClick={nextImage}
                  className="carousel-button cbtn-next"
                  style={{justifySelf: "end"}}>
            <BsChevronRight style={{
              fontSize: "22px",
              strokeWidth: "1px",
              marginLeft: "3px"
            }}/>
          </button>
          <div className="product-detail-image-container">
            {renderImages}
          </div>
        </div>
      </div>
  );
};

export default Carousel;
