import React from 'react';
import GetResponse from "./functional/GetResponse"

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
                <GetResponse 
                    url={this.state.url}
                />
            </div>
        );
    }
}

export default Get;
