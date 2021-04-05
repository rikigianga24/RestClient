import { Form, Button } from "react-bootstrap"

function PrintSelect(props)
{
    let options = []

    for (let id in props.ids)
    {
        options.push(<option>{id}</option>)
    }

    return (
        <Form>
            <div class="input-group">
                <Button variant="danger" type="submit">Elimina</Button>
                <Form.Control as="select">
                    {options}
                </Form.Control>
            </div>
        </Form>
    );
}

export default PrintSelect;