import React, { useState } from "react";
import { Row, Col, InputGroup, Button, Modal } from "react-bootstrap";

function HeaderSelect(props) {
  let m = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];
  let months = [];

  for (let i = 0; i < m.length; ++i) {
    months.push(<option value={i + 1}>{m[i]}</option>);
  }
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleShow = () => setShow(true);
  const handleShow1 = () => setShow1(true);
  const handleShow2 = () => setShow2(true);
  const handleClose = () => setShow(false);
  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);

  return (
    <Row className="mb-3">
      <Col xs={4}>
        <Button className="w-100" onClick={handleShow}>
          Seleziona per anno
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Seleziona l'anno</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Anno:</InputGroup.Text>
              </InputGroup.Prepend>
              <select className="form-control" id="year">
                {props.years}
              </select>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => props.click(document.getElementById("year"), handleClose)}>
              Carica
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
      <Col xs={4}>
        <Button className="w-100" onClick={handleShow1}>
          Seleziona per mese
        </Button>
        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header>
            <Modal.Title>Seleziona il mese</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Mese:</InputGroup.Text>
              </InputGroup.Prepend>
              <select className="form-control" id="month">
                {months}
              </select>
            </InputGroup>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Anno:</InputGroup.Text>
              </InputGroup.Prepend>
              <select className="form-control" id="year">
                {props.years}
              </select>
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
            <Button variant="primary" onClick={() => props.click(document.getElementById("month"), handleClose1, document.getElementById("year"))}>
              Carica
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
      <Col xs={4}>
        <Button className="w-100" onClick={handleShow2}>
          Seleziona per giorno
        </Button>
        <Modal show={show2} onHide={handleClose2}>
          <Modal.Header>
            <Modal.Title>Seleziona il giorno</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Giorno:</InputGroup.Text>
              </InputGroup.Prepend>
              <input type="date" id="day" className="form-control" />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose2}>
              Close
            </Button>
            <Button variant="primary" onClick={() => props.click(document.getElementById("day"), handleClose2)}>
              Carica
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
}

export default HeaderSelect;