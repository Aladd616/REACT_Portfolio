import React from "react";
import { Card, Button } from "react-bootstrap";

const Projects = ({ props }) => {
  <Card style={{ width: "18rem" }}>
    <Card.Img
      src={props.projectInfo.image}
      variant="top"
    />
    <Card.Body>
      <Card.Title>{props.projectInfo.title}</Card.Title>
      <Button href={props.projectInfo.app_url} variant="primary">
        APP
      </Button>
      <Button href={props.projectInfo.repo_url} variant="primary">
        REPO
      </Button>
    </Card.Body>
  </Card>;
};

export default Projects;
