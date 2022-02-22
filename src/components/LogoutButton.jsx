import React from 'react';
import {
  Button,
} from 'react-bootstrap';

const LogoutButton = ({ onClick }) => (
  <Button variant="primary" onClick={onClick}>
    Выйти
  </Button>
);

export default LogoutButton;
