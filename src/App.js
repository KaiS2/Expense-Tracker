import React from 'react';
import logo from './logo.svg';
import './App.css';

import ExpenseTable from "./ExpenseTable";
import UserInput from "./UserInput";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Expense Tracker
        </p>
      
        <div style = {{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
          <ExpenseTable />
        </div>
      </header>
    </div>
  );
}

export default App;



// Sources:
// https://dev.to/abdulbasit313/an-easy-way-to-create-a-customize-dynamic-table-in-react-js-3igg

