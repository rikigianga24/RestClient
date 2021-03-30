import { Alert } from "react-bootstrap"

function ServerDownAlert()
{
    return (
        <>
            <Alert variant={"warning"}>
            <h5>Non sono riuscito a contattare il server.</h5>
            <p>Riprova più tardi.</p>
            </Alert>
        </>
    );
}

export default ServerDownAlert;