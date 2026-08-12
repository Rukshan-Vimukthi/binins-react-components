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
      {width <= 500 ? (
        <Row className="binins-carousel">
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center"
            style={{zIndex: 10}}
          >
            <button
              onClick={onPrevButtonClick}
              className="binins-carousel-button"
            >
              {" "}
              &lt;{" "}
            </button>
          </Col>
          <Col xs={12} className="binins-carousel-slides-container-parent">
            <Row
              className="binins-carousel-slides-container flex-nowrap align-items-center justify-content-evenly gap-5"
              style={{
                transform: `translateY(-${
                  currentCarouselItemIndex * (100 / visibleItems)
                }%)`,
                transition: "transform 0.4s ease",
                zIndex: -10,
              }}
            >
              {carouselItems}
            </Row>
          </Col>
          <Col
            xs={12}
            className="d-flex align-items-center justify-content-center"
            style={{zIndex: 10}}
          >
            <button
              onClick={onNextButtonClick}
              className="binins-carousel-button"
            >
              {" "}
              &gt;{" "}
            </button>
          </Col>
        </Row>
      ) : (
        <Row className="binins-carousel">
          <Col xs={1} className="d-flex align-items-center justify-content-end">
            <button
              onClick={onPrevButtonClick}
              className="binins-carousel-button binins-carousel-button-1"
            >
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
          <Col
            xs={1}
            className="d-flex align-items-center justify-content-start"
          >
            <button
              onClick={onNextButtonClick}
              className="binins-carousel-button binins-carousel-button-2"
            >
              {" "}
              &gt;{" "}
            </button>
          </Col>
        </Row>
      )}
    </>
  );
};


Carousel.Item = CarouselItem;
export default Carousel;
