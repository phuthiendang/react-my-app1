import React from "react";
import "./App.css";
import configStore from "./store/configureStore";
import { addExpense, editExpense, removeExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "./actions/filters";
import getInvisibleExpenses from "./selectors/expenses";
import AppRouter from "./routers/AppRouter.js";
import { Provider } from "react-redux";

const store = configStore();

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  console.log(getInvisibleExpenses(state.expenses, state.filters));
});

let one = store.dispatch(
  addExpense({id:1, description: "Buy car", amount: 5000, createdAt: 1000 })
);
let two = store.dispatch(
  addExpense({id:2, description: "Buy house", amount: 100000, createdAt: -1000 })
);
//store.dispatch(removeExpense(one.expense.id));
//store.dispatch(editExpense(two.expense.id, { amount: 500000, description: "Mua vang"}));
store.dispatch(setTextFilter(""));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
//store.dispatch(setStartDate(-1000));
//store.dispatch(setEndDate(0));
//store.dispatch(setStartDate());

const jsx = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

export default jsx;
