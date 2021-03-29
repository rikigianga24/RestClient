import React from 'react';
import PrintResponse from "./functional/PrintResponse"

/**
 * Main Content per fare la richiesta GET
 */
class Get extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            url: "http://94.176.46.49:8000/api/observation"
        }
    }

    render() {
        return (
            <div>
                <PrintResponse 
                    url={this.state.url}
                />
            </div>
        );
    }
}

export default Get;
