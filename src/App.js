import React, { Component } from 'react'
import { render } from 'react-dom'


class App extends Component {
  constructor() {
    super()
  }
  componentWillMount() {
    this.getData()
  }

  getData() {
    fetch("https://api.npms.io/v2/search?q=react", {
    "method": "GET"
})
.then(response=>response.json())
.then(text=>{
  console.log(text)
  document.body.innerHTML=JSON.stringify(text);
})
  }

  render() {
    return (
      <div>
        <p></p>
      </div>
    )
  }
}

export default App;
