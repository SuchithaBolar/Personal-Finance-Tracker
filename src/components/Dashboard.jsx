import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs } from "firebase/firestore"; 
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import Navigation from './Navigation';
import '../styles/DashBoard.css'; 

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const fetchedTransactions = querySnapshot.docs.map(doc => doc.data());

      setTransactions(fetchedTransactions);

      let income = 0;
      let expense = 0;

      fetchedTransactions.forEach(transaction => {
        if (transaction.type === 'income') {
          income += transaction.amount;
        } else if (transaction.type === 'expense') {
          expense += transaction.amount;
        }
      });

      setTotalIncome(income);
      setTotalExpense(expense);
    };

    fetchTransactions();
  }, []);

  const data = [
    { name: 'Income', value: totalIncome },
    { name: 'Expense', value: totalExpense }
  ];

  const COLORS = ['#0088FE', '#FF8042'];

  return (
    <div className="summary-container">
            <Navigation />
      <h2>Summary</h2>
      <div className="summary-cards">
        <div className="summary-card income-card">
          <h3>Total Income</h3>
          <p>{totalIncome}</p>
        </div>
        <div className="summary-card expense-card">
          <h3>Total Expense</h3>
          <p>{totalExpense}</p>
        </div>
        <div className="summary-card balance-card">
          <h3>Net Balance</h3>
          <p>{totalIncome - totalExpense}</p>
        </div>
      </div>
      <div className="chart-container">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%" 
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};


export default Dashboard;
