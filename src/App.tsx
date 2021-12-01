import React, { useState } from 'react';
import './App.css';
import AddExpense from './expense-feature/add-expense/add-expense';
import Expenses from './expense-feature/expenses/expenses';
import { ExpenseItem } from './expense-feature/models/expense.interface';

function App() {
  const dummyExpenses: Array<ExpenseItem> = [{
    id: 1,
    name: 'credit card 1',
    amount: 200,
    date: new Date('01/11/2021')
}];
  const [expenses, setExpenses] = useState(dummyExpenses);
  const addExpenseHandler = (expense: ExpenseItem) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  
  return (
    <div className="App">
      <AddExpense onAddExpense={addExpenseHandler}></AddExpense>
      <Expenses expenses={expenses} ></Expenses>
    </div>
  );
}

export default App;
