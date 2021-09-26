import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Allen Ladd Portfolio</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
