import React from "react";
import Header from "./components/functional/Header";
import Footer from "./components/functional/Footer.js";
import GetData from "./components/GetData.js";
import Post from "./components/Post.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
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
                            <GetData />
                        </Route>
                        <Route exact path="/post">
                            <Post />
                        </Route>
                        <Route exact path="/put">

                        </Route>
                        <Route exact path="/delete">

                        </Route>
                    </Switch>

                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;