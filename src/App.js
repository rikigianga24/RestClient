import React from "react";
import Get from "./components/Get.js";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/functional/Header"

class App extends React.Component 
{
    constructor() 
    {
        super()
    }

    render() 
    {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Get />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App;