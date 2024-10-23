import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/TransactionForm.css'; 

const TransactionForm = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');
  const [date, setDate] = useState('');
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const validateForm = () => {
    let formErrors = {};

    if (!date) formErrors.date = "Date is required.";
    if (!amount || isNaN(amount) || amount <= 0) {
      formErrors.amount = "Please enter a valid amount.";
    }
    if (!category.trim()) formErrors.category = "Category is required.";
    // if (!description.trim()) formErrors.description = "Description is required.";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await addDoc(collection(db, "transactions"), {
        amount: parseFloat(amount),
        description,
        category,
        type, 
        date: date || new Date()
      });
      setAmount('');
      setDescription('');
      setCategory('');
      setType('income');
      setDate('');
      alert("Transaction added successfully!");
      navigate('/dashboard'); 
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleBack = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className="transaction-form-container">
      <Navigation />
      <form onSubmit={handleSubmit} className="transaction-form">
        <h2>Add Transaction</h2>

        <label>Select Date</label>
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
          required 
        />
        {errors.date && <span className="error">{errors.date}</span>}

        <label>Enter Amount</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Amount" 
          required 
        />
        {errors.amount && <span className="error">{errors.amount}</span>}

        <label>Enter Category</label>
        <input 
          type="text"
          value={category} 
          onChange={(e) => setCategory(e.target.value)} 
          placeholder="Category" 
          required 
        />
        {errors.category && <span className="error">{errors.category}</span>}

        <label>Select Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} required>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <label>Enter Description</label>
        <input 
          type="text"
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Description" 
        />
        {/* {errors.description && <span className="error">{errors.description}</span>} */}

        <div className="button-group">
          <button type="button" className="back-button" onClick={handleBack}>Go Back</button>
          <button type="submit" className="submit-button">Add Transaction</button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
