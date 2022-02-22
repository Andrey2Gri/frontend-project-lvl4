import React from 'react';
import {
  Navbar,
  Container,
} from 'react-bootstrap';

const Header = ({ children }) => (
  <Navbar bg="white" className="shadow-sm">
    <Container>
      <Navbar.Brand href="/">Hexlet Chat</Navbar.Brand>
      {children}
    </Container>
  </Navbar>
);

export default Header;
