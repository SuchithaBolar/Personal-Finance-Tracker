# Personal Finance Tracker

The Personal Finance Tracker is a web application developed to help users effectively manage and track their finances. It allows users to monitor their income and expenses, offering insights into their financial well-being. With a user-friendly interface, secure authentication, and robust tools for transaction tracking, sorting, and analysis, it provides an all-in-one solution for personal financial management.

# Table of Contents

Demo
Features
Technologies Used
Installation
Usage
Backend Setup
Assumptions & Limitations

# Demo
You can view the live demo of the Personal Finance Tracker here.

# Features
User Authentication
Sign Up: New users can create an account using their email and password. All authentication is handled securely via Firebase Authentication.
Login: Returning users can log in to access their personalized dashboard and manage their financial data.
Logout: Users can safely log out, ensuring their sensitive data remains protected.
Dashboard Overview
Summary of Financial Health: The dashboard displays the user's total income, total expenses, and net balance, giving an instant overview of their financial status.
Visual Representation: A bar chart provides a clear visualization of income and expenses over time, allowing users to identify spending trends and patterns.
Transaction Management
Add Transactions: Users can easily log transactions by specifying the amount, type (income or expense), date, category (e.g., Rent, Salary, Groceries, Utilities, etc.), and a description for additional context.
Edit Transactions: Transactions can be edited at any time to correct or update details such as amount, category, or date.
Delete Transactions: Unnecessary transactions can be removed, keeping the transaction list up-to-date and organized.
Transaction List
Detailed Transaction History: A comprehensive list of all transactions is available, including key details such as amount, type, category, and date.
Sort Options: Transactions can be sorted by date or by type (income/expense) to allow users to quickly find specific entries.
Filter Options: Users can filter the transaction list by categories (e.g., Rent, Groceries, etc.) for easier analysis of specific spending areas.
Data Security
User-Specific Data: All financial data is securely stored in Firebase Firestore, with access limited to authenticated users. Data privacy is a top priority.
Responsive Design
The application is fully responsive, ensuring it looks and works great on desktops, tablets, and smartphones.

# Technologies Used
Frontend: React.js, HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: Firebase Firestore for real-time, user-specific data storage
Authentication: Firebase Authentication for secure user login and management
Hosting: Firebase Hosting for deployment

# Installation
Follow these steps to install and run the project locally:

Clone the repository:

bash
Copy code
git clone https://github.com/SuchithaBolar/Personal-Finance-Tracker.git
Navigate to the project directory:

bash
Copy code
cd personal-finance-tracker
Install the required dependencies:

bash
Copy code
npm install

# Usage
To start the development server, run:

bash
Copy code
npm start
This will start the app in development mode. Open http://localhost:3000 in your browser to view the app.

To run tests, use:

bash
Copy code
npm test
For building the project for production, run:

bash
Copy code
npm run build
The production-ready build will be generated in the build folder.

# Backend Setup
To set up the backend:

Navigate to the backend directory:

bash
Copy code
cd backend
Install the backend dependencies:

bash
Copy code
npm install
Run the backend server:

bash
Copy code
npm start

# Assumptions & Limitations
This app is designed for individuals looking for an easy-to-use personal finance management solution.
Security for sensitive data is handled by Firebase Authentication and Firestore; however, users handling highly sensitive financial data may need to implement additional security measures.
The current feature set covers common financial management tasks; advanced or unique use cases may require further development.
