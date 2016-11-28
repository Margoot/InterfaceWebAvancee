/**
 * Created by Margot on 28/11/2016.
 */
import React from 'react';
import {NavItem, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router';

const HomeScene = ({children}, props) => {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="home">TD1 - ReactJS</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem><Link to="home/profile">Profile</Link></NavItem>
          <NavItem><Link to="home/cards">Cards</Link></NavItem>
          <NavItem><Link to="/">Logout</Link></NavItem>
        </Nav>
      </Navbar>
      <div >
        {children}
      </div>
    </div>
  )
};

export default HomeScene;