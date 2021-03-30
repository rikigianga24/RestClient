import React from 'react';
import GetResponse from "./functional/GetResponse"

class Get extends React.Component 
{
    constructor(props) {
        super(props)
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
