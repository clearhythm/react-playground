import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
  const [selectedYear, setSelectedYear] = React.useState('2020');

  const filterExpensesHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterExpenses={filterExpensesHandler} selected={selectedYear} />
        {filteredExpenses.length === 0 && <p className="expenses-empty">No expenses found.</p>}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key = {expense.id}
            title = {expense.title}
            amount = {expense.amount}
            date = {expense.date}
          />
        ))}
      </Card>
    </div>
  )
}

export default Expenses;