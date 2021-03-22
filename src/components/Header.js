import React from "react"


function Header(){
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">

            <img src={"./banana.png"} alt="" widht="50" height="50"/>

                    <a className="navbar-brand fw-bold fs-4" href="../index.js">Banana Analyzer</a>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link fs-4 " href="">Tabella temperature</a>
                        <a className="nav-link fs-4 " href="">Grafici</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header;
