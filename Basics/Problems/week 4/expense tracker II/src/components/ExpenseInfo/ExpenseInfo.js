import React from "react";
import styles from "./ExpenseInfo.module.css";

const ExpenseInfo = (props) => {
  const { expenses } = props;
  // Add logic here to calculate the grand total, profit and expense amount here
  const profitAmount = expenses
    .filter((expense) => expense.amount > 0)
    .reduce((sum, expense) => sum + expense.amount, 0);
  const lossAmount = expenses
    .filter((expense) => expense.amount < 0)
    .reduce((sum, expense) => sum + expense.amount, 0);

  const grandTotal = profitAmount + lossAmount; // Balance
  return (
    <div className={styles.expenseInfoContainer}>
      <div className={styles.balance}>
        <h4>YOUR BALANCE</h4>
        <h1>
          ${/* Grand total should be displayed here */}
          {grandTotal}
        </h1>
      </div>
      <div className={styles.incomeExpenseContainer}>
        <div>
          <h4>Income</h4>
          <p id="money-plus" className={`${styles.money} ${styles.plus}`}>
            +${/*Total Profit Amount should be displayed here */}
            {profitAmount}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className={`${styles.money} ${styles.minus}`}>
            -${/* Total expense amount should be displayed here */}
            {lossAmount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseInfo;
