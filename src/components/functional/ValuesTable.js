import React from "react"
import { Table } from "react-bootstrap"

function ValuesTable (props)
{
    return (
        <Table bordered hover striped style={{ width: "300px" }}>
            <tbody>
              <tr className="text-center">
                <td>
                  <b>Max</b>
                </td>
                <td>{parseFloat(props.max).toPrecision(5)}</td>
              </tr>
              <tr className="text-center">
                <td>
                  <b>Media</b>
                </td>
                <td>{parseFloat(props.average).toPrecision(5)}</td>
              </tr>
              <tr className="text-center">
                <td>
                  <b>Min</b>
                </td>
                <td>{parseFloat(props.min).toPrecision(5)}</td>
              </tr>
            </tbody>
          </Table>
    );
}

export default ValuesTable;