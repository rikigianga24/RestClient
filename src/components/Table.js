import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import MainContent from './components/MainContent'

class App extends React.Component {
    render(){
        return(
            <div>
                <Header />
                
                <Footer />
            </div>
        )
    }
}

export default App;
