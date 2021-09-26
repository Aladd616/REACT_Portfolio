import React from "react";
import { ListGroup, Nav } from "react-bootstrap";

function Resume() {
  return (
    <div>
      <Nav className="me-auto">
        <Nav.Link href="https://drive.google.com/uc?export=download&id=1ym11KiC5FsAlLmcc8h9bE8sZ7zgEYKQn">
          Download Resume
        </Nav.Link>
      </Nav>

      <ListGroup variant="flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item href="https://drive.google.com/uc?export=download&id=1ym11KiC5FsAlLmcc8h9bE8sZ7zgEYKQn">
          Download Resume
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Resume;
