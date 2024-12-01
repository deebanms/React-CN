import React from "react";
import styles from "./ExpenseInfo.module.css";

export default function ExpenseInfo({ balance, totalIncome, totalExpense }) {
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>
          ${/* Grand total should be displayed here */}
          {balance.toFixed(2)}
        </h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${/*Total Profit Amount should be displayed here */}
            {totalIncome.toFixed(2)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${/* Total expense amount should be displayed here */}
            {totalExpense.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
