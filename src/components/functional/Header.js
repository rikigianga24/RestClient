import React from 'react';
import { NavLink } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"

const Header = () => {
  return (
    <div>
      <>
        <Navbar>
          <Navbar.Brand>
            <NavLink to="/">
              <img src="./banana.png" width="64" height="64" />
            </NavLink>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link className="mr-4" href="/post">Inserisci</Nav.Link>
            <Nav.Link className="mr-4" href="/put">Aggiorna dati</Nav.Link>
            <Nav.Link className="mr-4" href="/delete">Elimina dati</Nav.Link>
          </Nav>
        </Navbar>
      </>
    </div>
  );
};

export default Header;