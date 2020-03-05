import React from "react";
import { connect } from "react-redux";
import ExpensesListItem from "./ExpensesListItem";
import selectedExpenses from "../selectors/expenses";

const ExpensesList = props => (
  <div className='list'>
    <h3>These are the List Expenses.</h3>
    {props.expenses.map(expense => (
      <ExpensesListItem key={expense.id} {...expense} />
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: selectedExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpensesList);
