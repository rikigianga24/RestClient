import React from "react";
import { Form, Button, Col, Row, InputGroup } from "react-bootstrap";

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form method="POST" className="p-3">
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup">Data</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="date" />
                </InputGroup>
              </Col>
              <div className="row mt-2">
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup">aTemp</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="aTemp" />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup">aHum</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="aHum" />
                  </InputGroup>
                </Col>
              </div>
              <div className="row mt-2">
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup">bTemp</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="bTemp" />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup">bHum</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="bHum" />
                  </InputGroup>
                </Col>
              </div>
              <div className="row mt-2">
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup">extTemp</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="extTemp" />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup">extHum</InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control placeholder="extHum" />
                  </InputGroup>
                </Col>
                <Button variant="btn btn-success" type="submit">
                  Inserisci
                </Button>
              </div>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </div>
    );
  }
}
export default Post;
