import React from 'react';
import { Container } from 'reactstrap';
import { Header } from './components';

export const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Header />
      {children}
    </Container>
  );
};
