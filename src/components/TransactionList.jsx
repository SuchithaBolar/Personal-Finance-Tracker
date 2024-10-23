// TransactionList.js
import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import '../styles/TransactionList.css'; 

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterType, setFilterType] = useState('all');

  useEffect(() => {
    const fetchTransactions = async () => {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const transactionsData = querySnapshot.docs.map(doc => doc.data());
      setTransactions(transactionsData);
      setFilteredTransactions(transactionsData);
    };

    fetchTransactions();
  }, []);

  const handleSort = (order) => {
    const sortedTransactions = [...filteredTransactions].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      
      if (order === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    setFilteredTransactions(sortedTransactions);
    setSortOrder(order);
  };

  const handleFilter = (type) => {
    setFilterType(type);

    if (type === 'all') {
      setFilteredTransactions(transactions);
    } else {
      const filtered = transactions.filter(transaction => transaction.type.toLowerCase() === type);
      setFilteredTransactions(filtered);
    }
  };

  return (
    <div className="transaction-list">
      <Navigation />

      <h2>Transaction List</h2>

      <div className="filters-container">

        <DropdownButton
          id="dropdown-sort-button"
          title={`Sort by Date (${sortOrder})`}
          className="mb-3"
          variant="light"
        >
          <Dropdown.Item onClick={() => handleSort('asc')}>Ascending</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSort('desc')}>Descending</Dropdown.Item>
        </DropdownButton>


        <DropdownButton
          id="dropdown-filter-button"
          title={`Filter by Type (${filterType})`}
          className="mb-3"
          variant="light"
        >
          <Dropdown.Item onClick={() => handleFilter('all')}>All Transactions</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilter('income')}>Only Income</Dropdown.Item>
          <Dropdown.Item onClick={() => handleFilter('expense')}>Only Expenses</Dropdown.Item>
        </DropdownButton>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.type}</td>
              <td>{transaction.category}</td>
              <td>{transaction.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TransactionList;
