import React from 'react'
import ReactJson from "react-json-view"

function Table(props)
{
  if (props.object !== null)
  {
    return (
      <div>
        <ReactJson src={props.object} />
      </div>
    );
  }

  return null;
}
    
export default Table;

