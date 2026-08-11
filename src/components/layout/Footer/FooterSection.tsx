import { Col, Row } from "react-bootstrap";

import { FooterSectionData } from "./types";

import "./Footer.css";


export function FooterSection(props: FooterSectionData) {
  return (
    <Col xs={12} md={4} lg={3} className="text-white">
      <Row className="">
        <h3>{props.title}</h3>
      </Row>
      <Row>
        <Col xs={12}>
          <ul
            style={{ listStyle: "none", marginLeft: "0px", paddingLeft: "0px" }}
          >
            {props.links.map((link) => {
              return (
                <li className="footer-section-link pt-1">
                  {link.icon ? link.icon : <></>}
                  <a className="text-decoration-none pe-0 ps-1" href={link.url}>
                    {link.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
      <Row>
        {props?.cta}
        {/* <button className="cta-button">Apply</button> */}
      </Row>
    </Col>
  );
}
