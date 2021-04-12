import { Col, ListGroup, Media, Row, Tab } from "react-bootstrap"

function Settings ()
{
    return (
        <Tab.Container defaultActiveKey="#info">
            <Row>
                <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#info">
                            Info
                        </ListGroup.Item>
                        <ListGroup.Item action href="#autori">
                            Autori
                        </ListGroup.Item>
                        <ListGroup.Item action href="#sorgenti">
                            Codice Sorgente
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="#info">
                            <h3>Librerie usate:</h3>
                            <ul className="list-unstyled">
                                <Media as="li">
                                    <Media.Body>
                                        <h6>React</h6>
                                    </Media.Body>
                                </Media>
                                <Media as="li">
                                    <Media.Body>
                                        <h6>React Google Charts</h6>
                                    </Media.Body>
                                </Media>
                                <Media as="li">
                                    <Media.Body>
                                        <h6>React Bootstrap</h6>
                                    </Media.Body>
                                </Media>
                                <Media as="li">
                                    <Media.Body>
                                        <h6>React Router DOM</h6>
                                    </Media.Body>
                                </Media>
                            </ul>
                            <h3>Icone usate: </h3>
                            <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#autori">
                            Made by <b>MonkeyBecomeSociety</b>&copy;
                        </Tab.Pane>
                        <Tab.Pane eventKey="#sorgenti">
                            L'applicazione è pubblica e il suo sorgente è accessibile
                            su <a href="https://github.com/rikigianga24/restclient">github</a>.
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default Settings;