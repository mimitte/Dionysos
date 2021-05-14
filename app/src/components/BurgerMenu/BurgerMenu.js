import React from 'react';
// import { NavLink } from 'react-router-dom';

import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

function MenuHamberger(props) {
    return (
        <Navbar  collapseOnSelect expand="lg" bg="ligth" variant="light">
          <Navbar.Brand href="/">
            DIONYSOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ml-auto">
              <NavLink to="/"><span className="glyphicon glyphicon-glass">Home</span></NavLink>
              <NavLink to="/cave">Cave</NavLink>
            <NavLink to="/new_bottle">Ajouter un vin</NavLink>
            <NavLink to="/bottle">The bottle</NavLink>
            </Nav> 
          </Navbar.Collapse>
        </Navbar>
      );
}

export default MenuHamberger;