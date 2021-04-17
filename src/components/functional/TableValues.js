import { Row, Col } from "react-bootstrap"

function TableValues(props) {
    return (
        <div>
            <Row className="h-100 flex-column justify-content-end mx-auto" style={{ color: props.darkMode.textColor }}>
                <Col className="p-2 shadow mb-2" style={{ backgroundColor: props.darkMode.paperBg }}>
                    <p>Media aTemp</p>
                    <h3>{props.aTemp !== undefined ? parseFloat(props.aTemp).toPrecision(4) : <img src="/icons/loading.svg" width="24" height="24" alt="loading..." />}</h3>
                </Col>
                <Col className="p-2 shadow mb-2" style={{ backgroundColor: props.darkMode.paperBg }}>
                    <p>Media aHum</p>
                    <h3>{props.aHum !== undefined ? parseFloat(props.aHum).toPrecision(4) : <img src="/icons/loading.svg" width="24" height="24" alt="loading..." />}</h3>
                </Col>
                <Col className="p-2 shadow mb-2" style={{ backgroundColor: props.darkMode.paperBg }}>
                    <p>Media bTemp</p>
                    <h3>{props.bTemp !== undefined ? parseFloat(props.bTemp).toPrecision(4) : <img src="/icons/loading.svg" width="24" height="24" alt="loading..." />}</h3>
                </Col>
                <Col className="p-2 shadow mb-2" style={{ backgroundColor: props.darkMode.paperBg }}>
                    <p>Media bHum</p>
                    <h3>{props.bHum !== undefined ? parseFloat(props.bHum).toPrecision(4) : <img src="/icons/loading.svg" width="24" height="24" alt="loading..." />}</h3>
                </Col>
                <Col className="p-2 shadow mb-2" style={{ backgroundColor: props.darkMode.paperBg }}>
                    <p>Media extTemp</p>
                    <h3>{props.extTemp !== undefined ? parseFloat(props.extTemp).toPrecision(4) : <img src="/icons/loading.svg" width="24" height="24" alt="loading..." />}</h3>
                </Col>
                <Col className="p-2 shadow mb-2" style={{ backgroundColor: props.darkMode.paperBg }}>
                    <p>Media extHum</p>
                    <h3>{props.extHum !== undefined ? parseFloat(props.extHum).toPrecision(4) : <img src="/icons/loading.svg" width="24" height="24" alt="loading..." />}</h3>
                </Col>
            </Row>
        </div>
    )
}

export default TableValues;