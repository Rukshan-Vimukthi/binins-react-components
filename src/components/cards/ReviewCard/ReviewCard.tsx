import { type ReactElement } from "react";
import { Card, Row, Col, CardHeader, CardBody } from "react-bootstrap";
import "./ReviewCard.css";

type Review = {
  profileImage?: string;
  name: string;
  highlight: string;
  stars?: number;
  content: string;
};

export function ReviewCard(props: Review): ReactElement {
  return (
    <>
      <Card className="review-card m-2" style={{ width: "100%" }}>
        <CardHeader>
          <Row>
            <Col xs={3}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  backgroundImage: "url(" + props.profileImage + ")",
                  backgroundColor: "#555",
                  borderRadius: "20px",
                }}
              ></div>
            </Col>
            <Col xs={9} className="d-flex flex-column justify-content-center">
              <Row className="fw-bold">{props.name}</Row>
              <Row style={{ fontSize: "0.9rem" }}>{props.highlight}</Row>
            </Col>
          </Row>
        </CardHeader>
        <CardBody style={{ fontSize: "1rem" }}>{props.content}</CardBody>
      </Card>
    </>
  );
}
