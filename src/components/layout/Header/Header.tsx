import { Container, Nav, NavItem, Navbar } from "react-bootstrap";

import "./Header.css";

export type NavbarItem = {
  text: string;
  URL: string;
};

type HeaderProps = {
  isFixed?: boolean;
  brandName?: string;
  highlight?: string;
  includeCTA?: boolean;
  ctaText?: string;
  items: NavbarItem[];
};

export function Header(props: HeaderProps) {
  return (
    <Navbar
      expand="md"
      className={
        "bg-dark w-100 header " + (props?.isFixed ? "position-fixed" : "")
      }
      style={{ zIndex: 1000 }}
    >
      <Container className="gap-5">
        <Navbar.Brand className="brand" style={{ cursor: "pointer" }}>
          <div style={{ fontWeight: "bolder" }} className="brand">
            {props?.brandName}
          </div>
          <div className="brand-highlight" style={{ marginTop: "0px" }}>
            {props?.highlight}
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          className=""
          style={{ color: "white", backgroundColor: "white" }}
          aria-controls="navbar-nav"
        />
        <Navbar.Collapse
          id="navbar-nav"
          className="w-md-100 d-lg-flex justify-content-end"
        >
          <Nav className="gap-3 gap-lg-5 ps-5 ps-md-0">
            {props.items.map((item: NavbarItem) => {
              return (
                <Nav.Link href={item.URL} className="header-nav-item">
                  {item.text}
                </Nav.Link>
              );
            })}
            {/* <Nav.Link className="header-nav-item">Results</Nav.Link> */}

            {/* <Nav.Link className="header-nav-item">Framework</Nav.Link> */}

            {/* <Nav.Link className="header-nav-item">Who it's for?</Nav.Link> */}

            {props.includeCTA ? (
              <NavItem className="">
                <button className="cta-button">{props.ctaText}</button>
              </NavItem>
            ) : (
              <></>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
