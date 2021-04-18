import React from "react"
import { Row, Col, InputGroup, Button } from "react-bootstrap"

function HeaderSelect(props) {
    let m = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
    let months = []

    for (let i = 0; i < m.length; ++i)
    {
        months.push(
            <option value={i}>{m[i]}</option>
        )
    }

    return (
        <Row className="mb-3">
            <Col xs={3}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Giorno</InputGroup.Text>
                    </InputGroup.Prepend>
                    <input type="text" id="day" className="form-control" />
                </InputGroup>
            </Col>
            <Col xs={3}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Mese</InputGroup.Text>
                    </InputGroup.Prepend>
                    <select className="form-control" id="month">
                        {months}
                    </select>
                </InputGroup>
            </Col>
            <Col xs={3}>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text>Anno:</InputGroup.Text>
                    </InputGroup.Prepend>
                    <select className="form-control" id="year">
                        {props.years}
                    </select>
                </InputGroup>
            </Col>
            <Col xs={3}>
                <Button className="w-100">Seleziona</Button>
            </Col>
        </Row>
    )
}

export default HeaderSelect