import "./App.css";
import React, { useState } from "react";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseInfo from "./components/ExpenseInfo/ExpenseInfo";
import ExpenseList from "./components/ExpenseList/ExpenseList";

export default function App() {
  // Create state for the expenses here
  const [expenses, setExpenses] = useState([]);
  // Calculate balance, income, and expense
  const totalIncome = expenses
    .filter((expense) => expense.amount > 0)
    .reduce((acc, expense) => acc + expense.amount, 0);
  const totalExpense = expenses
    .filter((expense) => expense.amount < 0)
    .reduce((acc, expense) => acc + Math.abs(expense.amount), 0);
  const balance = totalIncome - totalExpense;

  // Add new expense
  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <>
      <h2 className="mainHeading">Expense Tracker</h2>
      <div className="App">
        {/* Render expense form here */}
        <ExpenseForm addExpense={addExpense} />
        <div className="expenseContainer">
          {/* Render Expense Info here
            Render Expense List here */}
          <ExpenseInfo
            balance={balance}
            totalIncome={totalIncome}
            totalExpense={totalExpense}
          />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </>
  );
}
