import React, { useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { 
    id: 'e1',
    title: 'Car Insurance', 
    amount : 294.67, 
    date: new Date(2022, 10, 13)
   },
   {
    id: 'e2',
    title: 'Toilet Paper', 
    amount : 500.00, 
    date: new Date(2019, 9, 17)
   },
   {
    id: 'e3',
    title: 'Udon', 
    amount : 100.00, 
    date: new Date(2021, 8, 17)
   },
   {
    id: 'e4',
    title: 'Soup', 
    amount : 100.00, 
    date: new Date(2021, 8, 17)
   }
]


const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expenses => {
    setExpenses(prevExpenses => {
      return [expenses, ...prevExpenses];
      //state based on the old snapshot 
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
   );
}

export default App;
