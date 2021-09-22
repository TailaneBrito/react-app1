import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './ExpensesFilter.css';
import './Expenses.css';


//function Expenses(props){
const Expenses = (props) => {

    const [filterdYear, setFilterdYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        //console.log('Expenses.js');
        //console.log(selectedYear);
        setFilterdYear(selectedYear);
    };


    return (

        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterdYear} onChangeFilter={filterChangeHandler} />

                {props.items.map(expense => (
                    <ExpenseItem 
                        title={expense.title} 
                        amount={expense.amount}
                        date={expense.date}    
                    />
                ))};
                                

                {/* <ExpenseItem 
                    title={props.items[0].title}
                    amount={props.items[0].amount}
                    date={props.items[0].date}
                />
                <ExpenseItem 
                    title={props.items[1].title}
                    amount={props.items[1].amount}
                    date={props.items[1].date}
                />
                <ExpenseItem 
                    title={props.items[2].title}
                    amount={props.items[2].amount}
                    date={props.items[2].date}
                />
                <ExpenseItem 
                    title={props.items[3].title}
                    amount={props.items[3].amount}
                    date={props.items[3].date}
                /> */}
            </Card>
        </div>

    );

}

export default Expenses;