import React from 'react';
import GetRowData from "./functional/GetRawData"

class Delete extends React.Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <GetRowData />
        );
    }
}

export default Delete;