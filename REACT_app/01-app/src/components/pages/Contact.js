import React from "react";
import { Button, Form } from "react-bootstrap";

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Form>
        <Form.Group className="mb-3" controlId="contact-Form">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact-Form">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="contact-Form">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Comment"
            style={{ height: "150px" }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
