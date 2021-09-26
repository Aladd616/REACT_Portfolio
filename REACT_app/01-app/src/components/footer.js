import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function Footer() {
  return (
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
