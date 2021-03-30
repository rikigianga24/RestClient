import React from 'react';
import GetRowData from "./functional/GetRawData"

class Delete extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            url: "http://94.176.46.49:8000/api/observation"
        }
    }

    render()
    {
        return (
            <GetRowData />
        );
    }
}

export default Delete;