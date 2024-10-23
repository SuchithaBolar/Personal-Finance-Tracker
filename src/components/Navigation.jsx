import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { signOut } from "firebase/auth";
import { auth } from '../firebaseConfig';
import '../styles/Navigation.css'; 

const Navigation = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error("Logout failed:", error.message);
    }
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{ width: '100%' }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/dashboard" className="app-name">
          Personal Finance Tracker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/add-transaction">Add Transaction</Nav.Link>
            <Nav.Link as={Link} to="/manage-transactions">Manage Transactions</Nav.Link>
            <Nav.Link as={Link} to="/transactions">View Transactions</Nav.Link>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;