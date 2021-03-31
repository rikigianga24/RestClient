import { Form, Button, Alert } from "react-bootstrap"

function FormPost(props)
{
    if (props.error !== null)
    {
        return (
            <div>
                <Form onSubmit={props.onSubmit}/>
                <Alert variant={"error"}>
                    {props.error}
                </Alert>
            </div>
        );
    }
    
    return (<FormBootstrap onSubmit={props.onSubmit}/>);
}

function FormBootstrap (props)
{
    return (
        <Form onSubmit={props.onSubmit} id="form-post">
            <Form.Group>
                <Form.Label>Tempo</Form.Label>
                <Form.Control type="time" id="post_time" placeholder="TEMPO"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>A temp</Form.Label>
                <Form.Control type="text" id="post_a_temp" placeholder="temperatura A"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>A hum</Form.Label>
                <Form.Control type="number" id="post_a_hum" placeholder="umidità A"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>B temp</Form.Label>
                <Form.Control type="text" id="post_b_temp" placeholder="temperatura B"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>B hum</Form.Label>
                <Form.Control type="number" id="post_b_hum" placeholder="umidita B"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>EXT temp</Form.Label>
                <Form.Control type="text" id="post_ext_temp" placeholder="Ext temp"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>EXT hum</Form.Label>
                <Form.Control type="number" id="post_ext_hum" placeholder="Ext umidita"/>
            </Form.Group>
            <Button variant="success" type="submit" className="mt-3 mb-3">Inserisci</Button>

        </Form>
    );
}

export default FormPost;