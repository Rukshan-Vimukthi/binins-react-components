import { type ReactElement } from "react";
import { Card, Row } from "react-bootstrap";
import "./FAQCard.css";

type FAQCardProps = {
  question: string;
  answer: string;
  /**
   * width of the FAQ card as a percentage of the parent width
   */
  width?: number;
};
export function FAQCard(props: FAQCardProps):ReactElement {
  return (
    <Card
      className="flex-fill px-4 py-3 faq-card "
      style={{ width: props.width ? `${props.width}%` : `95%` }}
    >
      <Row className="faq-question">{props.question}</Row>
      <Row className="faq-answer">{props.answer}</Row>
    </Card>
  );
}
