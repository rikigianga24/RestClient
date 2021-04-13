import React from "react";
import Get from "./components/Get.js";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/functional/Header"
import Settings from "./components/functional/Settings"
import History from "./components/History"
import { Container } from "react-bootstrap"

class App extends React.Component 
{
    
    render() 
    {
        return (
            <Container fluid>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/">
                            <Get />
                        </Route>
                        <Route exact path="/settings">
                            <Settings />
                        </Route>
                        <Route exact path="/storage">
                            <History />
                        </Route>
                    </Switch>
                </Router>
            </Container>
        )
    }
}

export default App;