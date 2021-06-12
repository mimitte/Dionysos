import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

function signout() {
  localStorage.removeItem('userId');
  localStorage.removeItem('token');
}

function MenuHamberger(props) {
    return (
        <Navbar collapseOnSelect expand="md" bg="ligth" variant="light" className="sticky-navbar col-sm-12 col-md-12 col-lg-12">
          <Navbar.Brand href="/">
            DIONYSOS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav id='links'>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/cave">Cave</NavLink>
              <NavLink to="/new_bottle">Ajouter un vin</NavLink>
              <NavLink to="/create_cellar_zones">Créer une cave</NavLink>
              <button onClick={signout}>Déconnexion</button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
}

export default MenuHamberger;