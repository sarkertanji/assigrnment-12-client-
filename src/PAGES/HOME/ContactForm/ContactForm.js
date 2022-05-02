import React from "react";
import "./From.css";
import { Button, Col, Form, Row } from "react-bootstrap";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h4>Contact with us</h4>
      <h1 className="my-5">To Get Support.</h1>

      <Form>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Full Name" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="Subject" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12}>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" placeholder="Massage" rows={3} />
            </Form.Group>
          </Col>
        </Row>
        <Button className="px-5" variant="secondary" size="lg">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
