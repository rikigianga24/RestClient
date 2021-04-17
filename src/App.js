import React from "react";
import Get from "./components/Get.js";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/functional/Header"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            darkMode: {
                containerBg: '#eeeeee',
                navbarBg: '#fafafa',
                paperBg: '#fafafa',
                text: "Dark Mode",
                iconFill: 'black',
                icon: <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>,
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
                        text: "Dark Mode",
                        iconFill: 'black',
                        icon: <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>,
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
                        text: "Light Mode",
                        iconFill: 'white',
                        icon: <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>,
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
                <div className="container-fluid">
                    <Router>
                        <Header activeDarkMode={() => this.activeDarkMode()} darkMode={this.state.darkMode} />
                        <Switch>
                            <Route exact path="/">
                                <Get darkMode={this.state.darkMode} />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </div>
        )
    }
}

export default App;