
import React from 'react'

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import MainContent from "./components/MainContent.js";

class App extends React.Component {
    
    render(){
        return( 
            <div className="container">
                <Header />
                    <MainContent />
                <Footer />
            </div>
        )
    }
}

export default App;

