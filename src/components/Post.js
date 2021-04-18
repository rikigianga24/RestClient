import React from "react";
import { Form, Button, Col, Row, InputGroup, Alert, Container } from "react-bootstrap";
import Request from "../classes/Request";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmit(event) {
    event.preventDefault();

    let t = document.getElementById("date").value;
    let a_hum = document.getElementById("aHum").value;
    let a_temp = document.getElementById("aTemp").value;
    let b_temp = document.getElementById("bTemp").value;
    let b_hum = document.getElementById("bHum").value;
    let ext_hum = document.getElementById("extHum").value;
    let ext_temp = document.getElementById("extTemp").value;

    let req = new Request();

    let res = req.insertData(
      t,
      a_temp,
      a_hum,
      b_temp,
      b_hum,
      ext_temp,
      ext_hum
    );

    if (res < 400) {
      this.setState({
        response: {
          text: "Il dato è stato inserito",
          state: "success"
        }
      });
    } else {
      this.setState({
        response: {
          text: `Il dato non è stato inserito (${res})`,
          state: "danger"
        }
      });
    }
  }

  render() {
    return (
      <div className="d-flex flex-column justify-content-center mt-3">
        <Container>
          {
            this.state.response
            ? <Alert variant={this.state.response.state}>{this.state.response.text}</Alert>
            : null
          }
          <Form
            onSubmit={(event) => this.handleSubmit(event)}
            method="POST"
            id="formpost"
            className="p-3"
          >
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroup">Data</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control id="date" type="date" />
              </InputGroup>
            </Col>
            <div className="row mt-2">
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup">aTemp</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control id="aTemp" placeholder="aTemp" />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup">aHum</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control id="aHum" placeholder="aHum" />
                </InputGroup>
              </Col>
            </div>
            <div className="row mt-2">
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup">bTemp</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control id="bTemp" placeholder="bTemp" />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup">bHum</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control id="bHum" placeholder="bHum" />
                </InputGroup>
              </Col>
            </div>
            <div className="row mt-2">
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup">extTemp</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control id="extTemp" placeholder="extTemp" />
                </InputGroup>
              </Col>
              <Col>
                <InputGroup className="mb-3">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup">extHum</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control id="extHum" placeholder="extHum" />
                </InputGroup>
              </Col>
              <Button variant="btn btn-success" type="submit">
                Inserisci
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}
export default Post;
