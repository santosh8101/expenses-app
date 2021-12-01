import React from 'react';
import './expenses.css';
import Expense from '../expense/expense';
import { ExpenseItem } from '../models/expense.interface';
function Expenses(props: { expenses: any; }){
    //TODO:: use props/effect here to retreive list from an observabe data
    const expenses = props.expenses;
    const listOfExpenses = expenses.map((expense: ExpenseItem) => {
        return <li key={expense.id.toString()} className='expense-list-item'><Expense expense={expense}></Expense></li>
    })
    return (
        <div className="expense-container">
            <ul className='expense-list-container'>{listOfExpenses}</ul>
        </div>
    );
}
export default Expenses;