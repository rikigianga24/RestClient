import React from 'react';
import GetResponse from "./functional/GetResponse"

/**
 * Main Content per fare la richiesta GET
 */
class Get extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            url: "http://38ca0bab3561.ngrok.io/api/observation"
        }
    }

    render() {
        return (
            <div>
                <GetResponse 
                    url={this.state.url}
                />
            </div>
        );
    }
}

export default Get;
