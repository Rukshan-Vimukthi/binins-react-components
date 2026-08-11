import { type ReactElement } from "react";
import {Card, Row, Col} from "react-bootstrap";
import "./AddOnCard.css";

type AddOnCardProps = {
  /**
   * card title. (required)
   */
  title: string,

  /**
   * price of the add on feature (required)
   */
  price: string,

  /**
   * features each add on gives to users (optional)
   */
  features?: string[] | JSX.Element[] | JSX.Element,

  /**
   * width of the card. (optional) and if not provided the card acquires the 1/3 of the parent width
   */
  width?: string,

  /**
   * fill color of the shape rendered behind the price. default color is "#0055FF"
   */
  priceBGHighlightColor?: string

  /**
   * text color of the price
   */
  priceTextColor?: string 
}
export function AddOnCard(props: AddOnCardProps):ReactElement{
  return (
    <Card
      className=" px-4 py-3 position-relative overflow-hidden scale-on-hover"
      style={{
        width: props.width ? props.width : "calc(100% / 3)",
        height: "auto",
      }}
    >
      <Row className="position-relative h-100">
        <Col
          xs={3}
          md={2}
          className="d-flex position-relative justify-content-center align-items-center ps-0"
          style={{ height: "auto" }}
        >
          <svg className="position-absolute" width="100" height="100">
            <circle
              cx={0}
              cy={50}
              r={100}
              fill={
                props.priceBGHighlightColor
                  ? props.priceBGHighlightColor
                  : "#0066FFDD"
              }
            />
          </svg>
          <span
            style={{
              zIndex: 100,
              color: props.priceTextColor ? props.priceTextColor : "#FFF",
              fontSize: "1.4em"
            }}
            className=" fw-bold"
          >
            {props.price}
          </span>
        </Col>
        <Col className=" d-flex justify-content-start ps-5 align-items-center fw-semibold add-on-card-title" xs={9} md={10}>
          {props.title}
        </Col>
      </Row>
      {props.features ? <Row>{props.features}</Row> : <></>}
    </Card>
  );
}