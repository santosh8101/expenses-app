import './expense.css';
import { ExpenseItem } from '..//models/expense.interface';
function Expense(props: {expense: ExpenseItem}){
    const expense = props.expense;
    return (
        <div className="expense-section">
                <div className="date-section">{expense.date.toDateString()}</div>
                <div className="name-section">{expense.name}</div>
                <div className="amount-section">{expense.amount}</div>
        </div>
    )
}

export default Expense;