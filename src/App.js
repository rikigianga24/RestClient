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

class App extends React.Component 
{    
    render(){
        return( 
            <Router>
                <div className="container">

                    <Header />

                    <Switch>
                        <Route exact path="/">
                            <Get />
                        </Route>
                        <Route exact path="/post">
                            <Post />
                        </Route>
                        <Route exact path="/put">
                            <Put />
                        </Route>
                        <Route exact path="/delete">
                            <Delete />
                        </Route>
                    </Switch>

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;