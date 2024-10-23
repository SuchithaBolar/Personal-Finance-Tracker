import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"; 
import { Link, useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa'; 
import '../styles/ManageTransactions.css'; 
import Navigation from './Navigation';

const ManageTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTransactions = async () => {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      setTransactions(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    fetchTransactions();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      try {
        await deleteDoc(doc(db, "transactions", id));
        setTransactions(transactions.filter(transaction => transaction.id !== id));
      } catch (error) {
        console.error("Error deleting document:", error);
      }
    }
  };

  return (
    <div className="manage-transactions">
      <Navigation />
      <h2 className="manage-transactions-title">Manage Transactions</h2>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id}>
              <td>{index + 1}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td>{transaction.description}</td>
              <td>
                <button
                  className="action-button"
                  onClick={() => navigate(`/edit-transaction/${transaction.id}`)}
                  title="Edit Transaction"
                >
                  <FaEdit /> Edit
                </button>
                <button
                  className="action-button"
                  onClick={() => handleDelete(transaction.id)}
                  title="Delete Transaction"
                >
                  <FaTrash /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageTransactions;
