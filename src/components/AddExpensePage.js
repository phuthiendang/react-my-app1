import React from 'react';
import ExpenseForm from './ExpensesForm';
import {connect} from 'react-redux';
import {AddExpense, addExpense} from '../actions/expenses';
/*
. Create a new component name: ExpenseForm.js
*/


const AddExpensePage = (props) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm onSubmit={expense => {
      console.log(expense);
      props.dispatch(addExpense(expense));
      props.history.push('/')
    }} />
  </div>
);

export default connect()(AddExpensePage);

