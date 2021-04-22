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
import DarkModeIcon from "@material-ui/icons/Brightness4"
import LightModeIcon from "@material-ui/icons/Brightness7"

class App extends React.Component 
{
    constructor ()
    {
        super()
        this.state = {
            darkMode: {
                containerBg: '#323232',
                appBg: '#5b5b5b',
                textColor: 'white',
                isDarkMode: true,
                icon: <LightModeIcon />
            }
        }
    }

    activeDarkMode ()
    {
        if (this.state.darkMode.isDarkMode)
        {
            this.setState(
                (state, props) => {
                    return {
                        darkMode: {
                            containerBg: '#eeeeee',
                            appBg: 'transparent',
                            textColor: 'black',
                            isDarkMode: false,
                            icon: <DarkModeIcon />
                        }
                    }
                }
            )
        }
        else
        {
            this.setState( (state, props) => {
                return {
                    darkMode: {
                        containerBg: '#323232',
                        appBg: '#5b5b5b',
                        textColor: 'white',
                        isDarkMode: true,
                        icon: <LightModeIcon />
                    }
                }
            })
        }
    }

    render() 
    {
        return (
            <div style={{ backgroundColor: this.state.darkMode.containerBg, height: '100%' }}>
                <MaterialContainer maxWidth="lg" style={{backgroundColor: this.state.darkMode.containerBg}}>
                    <Router>
                        <Header bg={this.state.darkMode.appBg} textColor={this.state.darkMode.textColor} />
                        <div className="mt-4"></div>
                        <Switch>
                            <Route exact path="/">
                                <Get darkMode={this.state.darkMode} />
                            </Route>
                            <Route exact path="/settings">
                                <Settings />
                            </Route>
                            <Route exact path="/storage">
                                <History />
                            </Route>
                        </Switch>
                    </Router>
                    <Fab aria-label="darkMode" onClick={() => this.activeDarkMode()}>
                        {this.state.darkMode.icon}
                    </Fab>
                </MaterialContainer>
            </div>
        )
    }
}

export default App