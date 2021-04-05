import React from "react";
import Header from "./components/functional/Header";
import Get from "./components/Get.js";
import Post from "./components/Post.js";
import Put from "./components/Put.js";
import Delete from "./components/Delete.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component 
{    
    constructor()
    {
        super()
        this.state = {
            url: "http://38ca0bab3561.ngrok.io/api/observation"
        }
    }

    render(){
        return( 
            <Router>
                <div>

                    <Header />

                    <Switch>
                        <Route exact path="/">
                            <Get url={this.state.url} />
                        </Route>
                        <Route exact path="/post">
                            <Post url={this.state.url} />
                        </Route>
                        <Route exact path="/put">
                            <Put url={this.state.url} />
                        </Route>
                        <Route exact path="/delete">
                            <Delete url={this.state.url} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;