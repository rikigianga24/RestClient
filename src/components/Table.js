import React, { Component } from 'react'

 //logica tabella
    const Table = ({ object }) => { //passo a Table l'oggetto object
        return (

          <table>
            <thead>
              <tr>
                <th>Group-Id</th>
                <th>id</th>
                <th>name</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>
              { (object.length > 0) ? object.map( (object, index) => {
                 return (
                  <tr key={ index }>
                    <td>{ object.userId }</td>
                    <td>{ object.id }</td>
                    <td>{ object.title}</td>
                    <td>{ object.completed }</td>
                  </tr>
                )
               }) : <tr><td colSpan="5">Loading...</td></tr> }
            </tbody>
          </table>
        );
      }
    
export default Table;

