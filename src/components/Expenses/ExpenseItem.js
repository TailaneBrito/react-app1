//importing single pieces from rect with , { }
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


//function ExpenseItem(props) {
const ExpenseItem = (props) => {
    //this is a react hooks. Recognized they must be called directly inside the component. 
    //not the functions within it.
    const [title,setTitle] = useState(props.title); //returns an array, returns 1. element itself value, 2. updated function
    console.log('ExpenseItem evaluated by React');
    //let title = props.title;

    const clickHandler = () => {
        //special variable > call the useState function, calling the 
        setTitle('Updated!');
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{ title }</h2>
                <div className='expense-item__price'>${ props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;