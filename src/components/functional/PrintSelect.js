import { Form, Button, Alert } from "react-bootstrap"

function PrintSelect(props)
{
    let options = []

    for (let id of props.ids)
    {
        options.push(<option>{id}</option>)
    }

    if (props.error !== undefined && props.error !== null)
    {
        return (
            <div>
                <Alert variant={"danger"}>
                    {props.error}
                </Alert>
                <FormDelete onSubmit={props.onSubmit} options={options} />
            </div>
        );
    }
    else if (props.success !== undefined && props.success !== null)
    {
        return (
            <div>
                <Alert variant={"success"}>
                    {props.success}
                </Alert>
                <FormDelete onSubmit={props.onSubmit} options={options} />
            </div>
        );
    }

    return (
        <FormDelete onSubmit={props.onSubmit} options={options} />        
    );
}

function FormDelete(props)
{
    return (
        <Form onSubmit={props.onSubmit}>
            <div className="input-group">
                <Button variant="danger" type="submit">Elimina</Button>
                <Form.Control as="select" id="select_id">
                    {props.options}
                </Form.Control>
            </div>
        </Form>
    );
}

export default PrintSelect;