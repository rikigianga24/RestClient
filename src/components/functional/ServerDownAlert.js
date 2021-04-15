import React from "react"
import Alert from '@material-ui/lab/Alert'

function ServerDownAlert() 
{
    return (
        <Alert severity="warning">
            <h4>Non sono riuscito a contattare il server</h4>
            <p>Riprova più tardi</p>
        </Alert>
    );
}

export default ServerDownAlert;