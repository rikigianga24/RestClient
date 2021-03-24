import React from 'react'
import ReactJson from "react-json-view"
import bananaroteante from "../bananaroteante.gif"

function MethodHandler(props)
{
  if (props.requestMethod === "GET")
  {
    if (props.object !== null && props.isLoading === true)
    {
      return (
        <div>
          <ReactJson src={props.object} />
        </div>
      );
    }
    else if (props.isLoading === false)
    {
      return (<img src={bananaroteante} />);
    }
  }
  else if (props.requestMethod === "POST" && !props.isLoading)
  {
    return <h4>Dat inseriti!</h4>;
  }
  else if(props.requestMethod === "DELETE" && !props.isLoading)
  {
    return <h4>Delete!</h4>
  }

  return null;
}
    
export default MethodHandler;
