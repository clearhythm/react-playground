import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

function Expenses(props) {
  const [selectedYear, setSelectedYear] = React.useState('2020');

  const filterExpensesHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterExpenses={filterExpensesHandler} selected={selectedYear} />
        {props.expenses.map((expense) => (
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