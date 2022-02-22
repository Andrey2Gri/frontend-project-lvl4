import React from 'react';
import {
  ButtonGroup,
  Dropdown,
  Button,
} from 'react-bootstrap';

const Channel = ({ name, removable, variant }) => (
  <li className="nav-item w-100">
    {removable
      ? (
        <Dropdown as={ButtonGroup} className="d-flex">
          <Button variant={variant} className="w-100 rounded-0 text-start text-truncate">
            <span className="me-1">#</span>
            {name}
          </Button>
          <Dropdown.Toggle split variant={variant} id="dropdown-split-basic" className="flex-grow-0" />
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Удалить</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Переименовать</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )
      : (
        <Button variant={variant} className="w-100 rounded-0 text-start text-truncate">
          <span className="me-1">#</span>
          {name}
        </Button>
      )}
  </li>
);

export default Channel;
