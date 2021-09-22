import React from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


//function App() {
//standar javascript code.
const App = () => {
  const expenses = [
    { 
      id: 'e1',
      title: 'Car Insurance', 
      amount : 294.67, 
      date: new Date(2021, 10, 13)
     },
     {
      id: 'e2',
      title: 'Toilet Paper', 
      amount : 500.00, 
      date: new Date(2021, 9, 17)
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

    //element created, object that sets the attributes to the element, 
    //return React.createElement(
    //  'div', 
    //  {}, 
    //  React.createElement('h2', {}, "Let's get Started!"), 
    //  React.createElement(Expenses, {items: expenses})
    //);

  {/** Data arriving in APP.js */}
  const addExpenseHandler = expense => {
    console.log('in App.js');
    console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
   );
}

export default App;
