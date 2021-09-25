import React from "react";
import { Container, Row, Box, FooterLink, Column } from "react-bootstrap";

function Footer() {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <FooterLink href="https://www.linkedin.com/in/allen-ladd-0b2743a0/">
              <i className="footerLink">
                <span style={{ marginLeft: "10px" }}>Linkedin</span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://github.com/Aladd616">
              <i className="footerLink">
                <span style={{ marginLeft: "10px" }}>GitHub</span>
              </i>
            </FooterLink>
          </Column>
          <Column>
            <FooterLink href="https://www.facebook.com/allen.ladd.9/">
              <i className="footerLink">
                <span style={{ marginLeft: "10px" }}>FaceBook</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
}
export default Footer;
