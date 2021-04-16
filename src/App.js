import React from "react";
import Get from "./components/Get.js";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/functional/Header"
import NewValue from "./components/NewValue"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            darkMode: {
                containerBg: '#eeeeee',
                navbarBg: '#fafafa',
                paperBg: '#fafafa',
                text: "Light Mode",
                isDarkMode: false
            }
        }
    }

    activeDarkMode() {
        if (this.state.darkMode.isDarkMode) {
            this.setState(
                {
                    darkMode: {
                        containerBg: '#eeeeee',
                        navbarBg: '#fafafa',
                        paperBg: '#fafafa',
                        text: "Light Mode",
                        textColor: 'black',
                        isDarkMode: false
                    }
                }
            )
        }
        else {
            this.setState(
                {
                    darkMode: {
                        containerBg: '#212121',
                        navbarBg: '#424242',
                        paperBg: '#424242',
                        text: "Dark Mode",
                        textColor: 'white',
                        isDarkMode: true
                    }
                }
            )
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.darkMode.containerBg, height: '100%' }}>
                <div className="container">
                    <Router>
                        <Header activeDarkMode={() => this.activeDarkMode()} darkMode={this.state.darkMode} />
                        <Switch>
                            <Route exact path="/">
                                <Get darkMode={this.state.darkMode} />
                            </Route>
                            <Route exact path="/newValue">
                                <NewValue />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}

export default App;