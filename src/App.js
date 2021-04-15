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
import { Container as MaterialContainer, Fab } from "@material-ui/core"
import FormLog from "./components/FormLog.js"
import DarkModeIcon from "@material-ui/icons/BrightnessHigh"

class App extends React.Component 
{
    render() 
    {

        return (
            <MaterialContainer maxWidth="lg">
                <Router>
                    <Header />
                    <div className="mt-5"></div>
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
                        <Route exact path="/login">
                            <FormLog />
                        </Route>
                    </Switch>
                </Router>
                <Fab aria-label="darkMode">
                    <DarkModeIcon />
                </Fab>
            </MaterialContainer>
        )
    }
}

export default App;