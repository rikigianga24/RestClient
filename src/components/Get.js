import React from 'react';
import GetResponse from "./functional/GetResponse"

/**
 * Main Content per fare la richiesta GET
 */
class Get extends React.Component {
    constructor(props) {
        super(props)
        this.url = props.url
    }

    render() {
        return (
            <div>
                <GetResponse 
                    url={this.url}
                />
            </div>
        );
    }
}

export default Get;
