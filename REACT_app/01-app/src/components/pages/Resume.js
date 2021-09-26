import React from "react";
import { ListGroup, Nav } from "react-bootstrap";

function Resume() {
  return (
    <div>
      <Nav className="me-auto">
        {/* link to download the resume */}
        <Nav.Link href="https://drive.google.com/uc?export=download&id=1ym11KiC5FsAlLmcc8h9bE8sZ7zgEYKQn">
          Download Resume
        </Nav.Link>
      </Nav>
      <h2>Front-End</h2>
      <ListGroup variant="flush">
        <ListGroup.Item>HTML</ListGroup.Item>
        <ListGroup.Item>CSS</ListGroup.Item>
        <ListGroup.Item>JavaScript</ListGroup.Item>
        <ListGroup.Item>JQuery</ListGroup.Item>
        <ListGroup.Item>responsive design</ListGroup.Item>
        <ListGroup.Item>Bootstrap</ListGroup.Item>
      </ListGroup>
      <h2>Back-End</h2>
      <ListGroup variant="flush">
        <ListGroup.Item>APIs</ListGroup.Item>
        <ListGroup.Item>Node</ListGroup.Item>
        <ListGroup.Item>Express</ListGroup.Item>
        <ListGroup.Item>MySQL, Sequelize</ListGroup.Item>
        <ListGroup.Item>MongoDB, Mongoose</ListGroup.Item>
        <ListGroup.Item>REST</ListGroup.Item>
        <ListGroup.Item>GraphQL</ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default Resume;
