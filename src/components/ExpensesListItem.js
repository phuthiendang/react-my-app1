import React from "react";
import {removeExpense} from "../actions/expenses";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const ExpensesListItem = props => (
  <div>
    <p>
      ID: {props.id} - Description: {props.description} - Amount: {props.amount} - Created: {props.createdAt}  
      <Link to={`/edit/${props.id}`}>Edit</Link>
      <button onClick={() => props.dispatch(removeExpense(props.id)) }>x</button>
    </p>
  </div>
);

// const ExpensesListItem = {id, description, amount, createdAt}} => (
//   <div>
//     <p>
//       ID: {id} - Description: {description} - Amount: {amount} - Created: {createdAt}
//       <button> x</button>
//     </p>
//   </div>
// );

export default connect()(ExpensesListItem);
