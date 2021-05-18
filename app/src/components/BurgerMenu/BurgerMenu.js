import React from 'react';
// import { NavLink } from 'react-router-dom';

import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

function MenuHamberger(props) {
    return (
        <Navbar collapseOnSelect expand="md" bg="ligth" variant="light" className="col-sm-12 col-md-12 col-lg-12">
          <Navbar.Brand href="/">
            DIONYSOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/cave">Cave</NavLink>
            <NavLink to="/new_bottle">Ajouter un vin</NavLink>
            <NavLink to="/bottle">The bottle</NavLink>
            </Nav> 
          </Navbar.Collapse>
        </Navbar>
      );
}

export default MenuHamberger;