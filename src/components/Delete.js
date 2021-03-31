import React from 'react';
import GetRowData from "./functional/GetRawData"

class Delete extends React.Component
{
    constructor(props)
    {
        super(props)
        this.url = props.url
    }

    render()
    {
        return (
            <GetRowData />
        );
    }
}

export default Delete;