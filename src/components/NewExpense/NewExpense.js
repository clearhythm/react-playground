import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const addExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    stopEditingHandler();
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {isEditing === false && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing === true && (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onSaveNewExpense={addExpenseHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
