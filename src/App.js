import React from "react";
import Header from "./components/functional/Header";
import Footer from "./components/functional/Footer.js";
import Get from "./components/Get.js";
import Post from "./components/Post.js";
import Put from "./components/Put.js";
import Delete from "./components/Delete.js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

let URL = "http://38ca0bab3561.ngrok.io/"

class App extends React.Component 
{    
    render(){
        return( 
            <Router>
                <div className="container">

                    <Header />

                    <Switch>
                        <Route exact path="/">
                            <Get url={URL} />
                        </Route>
                        <Route exact path="/post">
                            <Post url={URL} />
                        </Route>
                        <Route exact path="/put">
                            <Put url={URL} />
                        </Route>
                        <Route exact path="/delete">
                            <Delete url={URL} />
                        </Route>
                    </Switch>

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;