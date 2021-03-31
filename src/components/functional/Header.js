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
              <img src="./icons/banana.png" width="90" height="90" alt="error on loading.."/>
            </NavLink>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/post">
              <button className="btn">
                <img src="./icons/insert.png" alt="insert data" width="36" height="36"/>
              </button>
            </Nav.Link>
            <Nav.Link href="/put">
              <button className="btn">
                <img src="./icons/update-arrows.png" alt="insert data" width="36" height="36"/>
              </button>
            </Nav.Link>
            <Nav.Link href="/delete">
              <button className="btn">
                <img src="./icons/cancel.png" alt="insert data" width="36" height="36"/>
              </button>
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    </div>
  );
};

export default Header;