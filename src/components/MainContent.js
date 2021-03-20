import React from 'react'

function MainContent(){
  return(
    fetch("https://jsonplaceholder.typicode.com/todos/", {
    "method": "GET"
    })
      .then(response=>response.json())
      .then(text=>{
        console.log(text)
        document.body.innerHTML=JSON.stringify(text);
      })
  )
}

export default MainContent;