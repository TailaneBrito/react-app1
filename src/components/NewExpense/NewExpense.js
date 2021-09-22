import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    {/** passing data to the console. **/}
    const saveExpenseDataHandler = (enteredExpenseData) => {
        {/* Pass ExpenseData to the APP, from ExpenseForm to New Expense to App**/}
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
    
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;