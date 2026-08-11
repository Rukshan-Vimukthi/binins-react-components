import { type ReactElement } from "react";
import { Card, Row } from "react-bootstrap";

type Step = {
  step: number | string;
  description: string;
};

export function StepCard(props: Step):ReactElement {
  return (
    <>
      <Card
        style={{ width: "auto" }}
        className=" flex-fill px-0 pb-4 m-2 overflow-hidden"
      >
        <Row
          className="text-center justify-content-center pb-4 position-relative overflow-hidden"
          style={{ fontSize: "1.7rem" }}
        >
          <svg
            width={100}
            height={50}
            className="position-absolute w-100"
            preserveAspectRatio="true"
          >
            <ellipse cx={"50%"} cy={0} rx={"150%"} ry={45} fill="#5500FF25" />
          </svg>
          <div>{props.step}</div>
        </Row>
        <Row className="text-center justify-content-center px-4">
          {props.description}
        </Row>
      </Card>
    </>
  );
}
