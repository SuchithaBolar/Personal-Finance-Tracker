# Personal Finance Tracker

The Personal Finance Tracker is a web application designed to help users manage their personal finances efficiently. By tracking income and expenses, users can gain better insights into their financial health. The application features a user-friendly interface, secure authentication, and powerful tools for sorting and analyzing financial data.

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Backend Setup](#backend-setup)

## Demo
Check out the live demo of the Personal Finance Tracker [here](https://personal-finance-tracker-ab36d.web.app/login).

## Features
### User Authentication
- **Sign Up**: New users can easily sign up for an account using their email and password. User authentication is securely handled through Firebase Authentication.
- **Login**: Existing users can log in to access their personal financial data. Once logged in, users will be directed to their personal dashboard.
- **Logout**: Users can securely log out of their accounts, ensuring that their financial data remains private.

### Dashboard Overview
- **Total Income, Expenses, and Net Balance**: The dashboard provides a quick summary of the user's financial health, displaying total income, total expenses, and the net balance (total income minus total expenses).
- **Bar Graph Visualization**: A bar graph is included on the dashboard to visualize income and expenses over a specified period. This helps users understand their spending and earning patterns easily.

### Transaction Management
- **Add Transactions**: Users can add new transactions by specifying the amount, type (income or expense), date, and category (e.g., Groceries, Rent, Salary, Utilities, Others). A brief description can also be added for more context.
- **Edit Transactions**: Users can edit existing transactions to update the amount, type, date, category, and description if needed.
- **Delete Transactions**: Users can delete transactions that are no longer necessary, keeping their transaction list organized and relevant.

### Transaction List
- **Comprehensive Transaction List**: Users can view a list of all their financial transactions, complete with details such as the amount, type, date, category, and description.
- **Sorting Options**: The transaction list can be sorted by various criteria, including the date of the transaction and type (income or expense).
- **Filtering Options**: Users can filter the transaction list based on categories like Groceries, Rent, Salary, Utilities, and Others, aiding in better analysis of spending habits.

### Data Security
- **User-Specific Data**: Each user's data is securely stored in Firebase Firestore, ensuring that only the authenticated user can access and manage their financial information.

### Responsive Design
The application is designed to be fully responsive, providing an optimal viewing experience across different devices, including desktops, tablets, and smartphones.

## Technologies Used
- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: Firebase Firestore for storing user-specific transaction data
- **Authentication**: Firebase Authentication for secure user account management
- **Hosting**: Firebase Hosting for deploying the application

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/Sinchana-A-J/financial-tracker.git
    ```
2. Navigate to the project directory:
    ```bash
    cd financial-tracker
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage
1. Start the development server:
    ```bash
    npm start
    ```
   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. Run the tests:
    ```bash
    npm test
    ```
   This launches the test runner in interactive watch mode.

3. Build for production:
    ```bash
    npm run build
    ```
   This will create a production-ready build of the application in the `build` folder.

## Backend Setup
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```
2. Install backend dependencies:
    ```bash
    npm install
    ```
3. Run the backend server:
    ```bash
    npm start
    ```

## Assumptions & Limitations
- The application is designed for personal finance management and aims to be intuitive for users with basic financial literacy.
- Data security is managed using Firebase Authentication and Firestore, but additional security measures may be required for handling highly sensitive data.
- The application focuses on common financial management scenarios; specific or advanced use cases may need further customization.
