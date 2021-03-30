import {Form} from "react-bootstrap"

function GetRowData()
{
    let risultato, array

    /*let xml = new XMLHttpRequest();

    xml.onload = data => {
        risultato = JSON.parse(xml.responseText)
    }

    xml.open("GET", props.url, false)
    xml.setRequestHeader("X-AUTH-TOKEN", "BANANA-TOKEN-2021")
    xml.setRequestHeader("Accept", "application/json")
    xml.send(null)*/

    return (
        <> 
            <Form>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Custom select</Form.Label>
                    <Form.Control as="select" custom>
                    
                    </Form.Control>
                </Form.Group>
            </Form>
        </>
    );
}

export default GetRowData;