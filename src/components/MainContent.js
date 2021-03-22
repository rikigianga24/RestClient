import React from 'react'
import ReactDOM from 'react'

class MainContent extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { }; 
    } 
    componentDidMount() {
        // send HTTP request
        // save it to the state
    }
    render() { 
        return (
            <div> 
                <h1>This is a view created by a class component</h1> 
            </div> 
        ) 
    } 
} 
ReactDOM.render( <MainContent />, document.getElementById('root') );

export default MainContent;