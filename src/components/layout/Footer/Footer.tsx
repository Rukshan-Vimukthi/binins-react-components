import { Col, Row } from "react-bootstrap";

import { FooterProps } from "./types";
import { FooterSection } from "./FooterSection";

import "./Footer.css";

type FooterComponent = React.FC<FooterProps> & {Section: typeof FooterSection};

const Footer: FooterComponent = (props) => {
  return (
    <Row className="" style={{ backgroundColor: "#151525" }}>
      <Col xs={12}>
        <Row className="px-5 py-5 gap-3 gap-md-0">
          <Col xs={12} md={4} lg={3}>
            <Row className="brand">
              <div>
                <h1
                  style={{ fontWeight: "bolder" }}
                  className="brand-highlight"
                >
                  {props.brandName}
                </h1>
              </div>
              <div>
                <h4>{props.brandHighlight}</h4>
              </div>
              <div className="pt-3" style={{ fontSize: "1.0rem" }}>
                {props?.brandDescription}
              </div>
            </Row>
          </Col>
          {props.sections?.map((sectionData) => (
            <FooterSection
              title={sectionData.title}
              links={sectionData.links}
            />
          ))}
          {props.children}
        </Row>
      </Col>
      <Col
        xs={12}
        className="text-white px-5 py-3"
        style={{ fontSize: "0.9rem" }}
      >
        <hr />
        <div>&copy;{props.copyrightText}</div>
        <div>Privacy Policy | Terms</div>
      </Col>
    </Row>
  );
}


Footer.Section = FooterSection;

export default Footer;
