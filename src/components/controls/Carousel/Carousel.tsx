import React, { type ReactElement, useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import { CarouselProps } from "./types";

import "./Carousel.css";
import { CarouselItem } from "./CarouselItem";
import { useWindowSize } from "../../../hooks/useWindowSize";

type CarouselComponent = React.FC<CarouselProps> & {Item: typeof CarouselItem}

const Carousel: CarouselComponent = (props) => {
  const [carouselItems, setCarouselItems] = useState<ReactElement[]>([]);
  const width = useWindowSize();

  const visibleItems = (
    width >= 900 ? 3 : 
    width >= 768 ? 2 : 
    1)

  const [currentCarouselItemIndex, setCurrentCarouselItemIndex] =
    useState<number>(0);

  const onPrevButtonClick = () => {
    setCurrentCarouselItemIndex((old) => Math.max(old - 1, 0));
  };

  const onNextButtonClick = () => {
    setCurrentCarouselItemIndex((old) =>
      Math.min(carouselItems.length / visibleItems, old + 1)
    );
  };

  useEffect(() => {
    const items = props.items.map((item, index) => {
      return <Carousel.Item className="binins-carousel-item" content={item} key={"binins-carousel-item-" + index} />;
    });

    setCarouselItems(items);
    console.log("Carousel Items Updated!")
  }, [props.items]);

    useEffect(() => {
      console.log("Carousel props.items: ", props.items);
    }, [props.items]);

  return (
    <>
      <Row style={{ width: "100%", height: "500px" }}>
        <Col xs={1} className="d-flex align-items-center justify-content-end">
          <button onClick={onPrevButtonClick} className="binins-carousel-button">
            {" "}
            &lt;{" "}
          </button>
        </Col>
        <Col xs={10} className="overflow-x-hidden">
          <Row
            className="w-auto h-100 flex-nowrap align-items-center justify-content-evenly gap-5"
            style={{
              transform: `translateX(-${
                currentCarouselItemIndex * (100 / visibleItems)
              }%)`,
              transition: "transform 0.4s ease",
              zIndex: -1,
            }}
          >
              {carouselItems}
          </Row>
        </Col>
        <Col xs={1} className="d-flex align-items-center justify-content-start">
          <button onClick={onNextButtonClick} className="binins-carousel-button">
            {" "}
            &gt;{" "}
          </button>
        </Col>
      </Row>
    </>
  );
};


Carousel.Item = CarouselItem;
export default Carousel;
