import { useState } from "react";
import { ExpenseItem } from "../models/expense.interface";
import './add-expense.css';

function AddExpense(props: any){
    const [expenseName, setExpenseName] = useState<string>('');
    const [expenseDate, setExpenseDate] = useState<string>(new Date().toDateString());
    const [expenseAmount, setExpenseAmount] = useState<number>(0);
    const nameChangeHandler = (event: any) => {
        setExpenseName(event.target.value);
    }
    const dateChangeHandler = (event: any) => {
        setExpenseDate(event.target.value);
    }
    const amountChangeHandler = (event: any) => {
        setExpenseAmount(event.target.value);
    }
    const buttonClickHandler = ()=>{
        const expense: ExpenseItem = {id: Number(Math.random().toFixed(2)),amount: expenseAmount, name: expenseName, date: new Date(expenseDate)};
        props.onAddExpense(expense);
    }
    return (
        <div className="add-expense-container">
            <input type="text" name="" id="" className={expenseName ? 'secondary-class' : 'primary-class' } value={expenseName} onChange={nameChangeHandler}/>
            <input type="date" name="" id="" value={expenseDate} onChange={dateChangeHandler}/>
            <input type="number" name="" id="" value={expenseAmount} onChange={amountChangeHandler}/>
            <button type="submit" onClick={buttonClickHandler}>Add Expense</button>
        </div>
    )
}
export default AddExpense;
