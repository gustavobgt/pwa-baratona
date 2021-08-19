import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../../../hooks/useAuth';
import { HOME } from '../../../../navigation/router-paths';
import firebase from 'firebase';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { saveUser } = useAuth();
  const history = useHistory();

  const toggle = () => setIsOpen(!isOpen);
  const handleLogout = async () => {
    await firebase.auth().signOut();
    saveUser({ token: '' });
    history.push('/');
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href={HOME}>PWA </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Minha conta
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={handleLogout}>Sair</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
