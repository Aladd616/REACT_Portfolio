import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

// nacbar for footer
function Footer() {
  return (
    // locks footer to botton of the page
    <Navbar fixed="bottom" bg="light" variant="light">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="https://www.linkedin.com/in/allen-ladd-0b2743a0/">
            Linkedin
          </Nav.Link>
          <Nav.Link href="https://github.com/Aladd616">GitHub</Nav.Link>
          <Nav.Link href="https://www.facebook.com/allen.ladd.9/">
            Facebook
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
