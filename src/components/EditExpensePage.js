import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpensesForm';
import { editExpense } from '../actions/expenses';


const EditExpensePage = (props) => {
  console.log(props.expenses);
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
      <ExpenseForm expense={props.expense} 
        onSubmit={
          (expenseEdited) => {console.log(expenseEdited)
          props.dispatch(editExpense(props.expense.id,expenseEdited));
          props.history.push('/');
          }} />
    </div>
  );
};
// Viet ham mapStateToProps => Connect to store and check ID, if it exists => show information
const mapStateToProps = (state, props) => {
    return {
      expense: state.expenses.find(
        exp => exp.id === parseInt(props.match.params.id)
      )
    } 
};

export default connect(mapStateToProps)(EditExpensePage);
