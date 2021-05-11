import React from 'react';
// import { NavLink } from 'react-router-dom';

import { button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

function MenuHamberger(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="ligth" variant="light">
          <Navbar.Brand href="#home">
            DIONYSOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavLink to="/"><span className="glyphicon glyphicon-glass">Home</span></NavLink>
              <NavLink to="/cave">Cave</NavLink>
              <NavLink to="/new_bottle">Ajouter un vin</NavLink>
            </Nav> 
          </Navbar.Collapse>
        </Navbar>
      );
}

export default MenuHamberger;