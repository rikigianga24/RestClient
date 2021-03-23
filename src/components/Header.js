import React from "react"

class Header extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                <img src={"./banana.png"} alt="" widht="50" height="50"/>
                        <a className="navbar-brand fw-bold fs-4" href="../index.js">Banana Analyzer</a>
                        
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
            </nav>
        );
    }
    
}
export default Header;
