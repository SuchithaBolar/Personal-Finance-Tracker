
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import ManageTransactions from './components/ManageTransactions';
import ProtectedRoute from './components/ProtectedRoute';
import EditTransaction from './components/EditTransaction'; // Import for Edit
import { Container, CssBaseline, Box } from '@mui/material';

function App() {
  return (
    <Router>
      <CssBaseline />
      <Container>
        <Box sx={{ mt: 4 }}>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
        <Route path="/add-transaction" element={<ProtectedRoute element={<TransactionForm />} />} />
        <Route path="/transactions" element={<ProtectedRoute element={<TransactionList />} />} />
        <Route path="/manage-transactions" element={<ProtectedRoute element={<ManageTransactions />} />} />
        <Route path="/edit-transaction/:id" element={<ProtectedRoute element={<EditTransaction />} />} /> {/* Route for Edit */}
        <Route path="/" element={<Navigate to="/login" />} /> {/* Default redirect */}
      </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
