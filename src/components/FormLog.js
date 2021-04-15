import React from "react";
import { Button, Form, Col } from "react-bootstrap";
import Chart from "react-google-charts";

class FormLog extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Col className="col-4"></Col>
          <Col xs="auto">
            <Form className="position-absolute top-50 start-50 translate-middle">
              <Form.Group controlId="FormBasicName">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Enter name" />
              </Form.Group>
              <Form.Group controlId="FormBasicSurname">
                <Form.Label>Cognome</Form.Label>
                <Form.Control type="text" placeholder="Enter surname" />
              </Form.Group>
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="email" placeholder="Enter username" />
                <Form.Text className="text-muted">
                  Ricorda il tuo username per accedere in seguito
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Continua
              </Button>
            </Form>
          </Col>
        </div>
      </div>
    );
  }
}
export default FormLog;
