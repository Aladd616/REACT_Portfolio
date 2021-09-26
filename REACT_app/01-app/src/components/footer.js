import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Footer() {
  return (
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>

    // <Container>
    //   <Row>
    //     <Column>
    //       <FooterLink href="https://www.linkedin.com/in/allen-ladd-0b2743a0/">
    //         <i className="footerLink">
    //           <span style={{ marginLeft: "10px" }}>Linkedin</span>
    //         </i>
    //       </FooterLink>
    //     </Column>
    //     <Column>
    //       <FooterLink href="https://github.com/Aladd616">
    //         <i className="footerLink">
    //           <span style={{ marginLeft: "10px" }}>GitHub</span>
    //         </i>
    //       </FooterLink>
    //     </Column>
    //     <Column>
    //       <FooterLink href="https://www.facebook.com/allen.ladd.9/">
    //         <i className="footerLink">
    //           <span style={{ marginLeft: "10px" }}>FaceBook</span>
    //         </i>
    //       </FooterLink>
    //     </Column>
    //   </Row>
    // </Container>
  );
}

export default Footer;
