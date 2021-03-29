import React from 'react';
import { NavLink } from "react-router-dom"
import { Navbar } from "react-bootstrap"

const Header = () => {
  return (
    <div>
      <>
        <Navbar classNAme="">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/post">Inserisci</NavLink>
        </Navbar>
      </>
    </div>
  );
};

export default Header;