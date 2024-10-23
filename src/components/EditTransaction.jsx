import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import '../styles/EditTransaction.css'; 

const EditTransaction = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [transaction, setTransaction] = useState({ 
    date: '', 
    amount: '', 
    category: '', 
    type: '', 
    description: '' 
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchTransaction = async () => {
      const docRef = doc(db, "transactions", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setTransaction(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchTransaction();
  }, [id]);

  const validate = () => {
    const newErrors = {};
    if (!transaction.date) newErrors.date = 'Date is required.';
    if (!transaction.amount) {
      newErrors.amount = 'Amount is required.';
    } else if (isNaN(transaction.amount) || parseFloat(transaction.amount) <= 0) {
      newErrors.amount = 'Amount must be a positive number.';
    }
    if (!transaction.category.trim()) newErrors.category = 'Category is required.';
    if (!transaction.type) newErrors.type = 'Type is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const docRef = doc(db, "transactions", id);
        await updateDoc(docRef, transaction);
        alert("Transaction Edited successfully!");
        navigate('/manage-transactions');
      } catch (error) {
        console.error("Error updating document:", error);
      }
    }
  };

  return (
    <div className="transaction">
      <Navigation/>
    <form onSubmit={handleSubmit} className="transaction-form">
      <h2 className="form-title">Edit Transaction</h2>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={transaction.date}
          onChange={(e) => setTransaction({ ...transaction, date: e.target.value })}
          className="form-control"
          required
        />
        {errors.date && <span className="error-message">{errors.date}</span>}
      </div>

      <div className="form-group">
        <label>Amount</label>
        <input
          type="number"
          value={transaction.amount}
          onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })}
          className="form-control"
          placeholder="Enter amount"
          required
        />
        {errors.amount && <span className="error-message">{errors.amount}</span>}
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          value={transaction.category}
          onChange={(e) => setTransaction({ ...transaction, category: e.target.value })}
          className="form-control"
          placeholder="Enter category"
          required
        />
        {errors.category && <span className="error-message">{errors.category}</span>}
      </div>

      <div className="form-group">
        <label>Type</label>
        <select
          value={transaction.type}
          onChange={(e) => setTransaction({ ...transaction, type: e.target.value })}
          className="form-control"
          required
        >
          <option value="">Select Type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        {errors.type && <span className="error-message">{errors.type}</span>}
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={transaction.description}
          onChange={(e) => setTransaction({ ...transaction, description: e.target.value })}
          className="form-control"
          placeholder="Enter description"
          rows="3"
        />
      </div>
      <button type="submit" className="update-button">Update Transaction</button>
    </form>
    </div>
  );
};

export default EditTransaction;
