import { type ReactElement } from "react";
import { Card, Row } from "react-bootstrap";

type FeatureCardProps = {
  title: string;
  items: string[];
  image?: string;
  width?: number;
};
export function FeatureCard(props: FeatureCardProps):ReactElement{ 
  return (
    <Card
      className={
        " h-100 px-0 py-0 overflow-hidden scale-on-hover " +
        (props.image ? "pb-3" : "py-3")
      }
      style={{ width: props.width ? `${props.width}%` : `95%` }}
    >
      {props.image ? (
        <div
          style={{
            width: "100%",
            height: "200px",
            background: `url(${props.image})`,
            backgroundSize: "contain",
          }}
        ></div>
      ) : (
        <></>
      )}
      <Row className="card-heading fw-semibold px-4 pt-2">{props.title}</Row>
      <Row className="card-content px-3 pt-2">
        {props.items.map((item) => (
          <span>{item}</span>
        ))}
      </Row>
    </Card>
  );
}
