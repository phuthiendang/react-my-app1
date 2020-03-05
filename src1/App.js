import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers } from 'redux';

//store, createStore, combineReducers, stateExpensesDefault, stateFiltersDefault, expensesReducers, filtersReducers
const stateExpensesDefault = [];
const stateFiltersDefault = {
  text: 'house',
  sortBy: 'amounnt',
  startAt: undefined,
  endAt: undefined
};

const expensesReducers = (state = stateExpensesDefault, action) =>{
  switch (action.type) {
    case 'ADD_EXPENSES':
      // return state.concat(action.expenses);
      return [...state, action.expense];
    case 'REMOVE_EXPENSES':
      return state.filter((exp) => exp.id !== action.id);
    case 'EDIT_EXPENSES':
      return state.map((exp) => {
        if (exp.id === action.id) {
          return {...exp, }
        } else {
          return {
            ...exp,
            ...action.updates
          }}
      });
    default:
      return state;
  }
};

const filtersReducers = (state = stateFiltersDefault, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {...state, text: action.text};
    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date'};    
    case 'SORT_BY_AMOUNT':
      return {...state, sortBy: 'amount'};    
    default: 
      return state;
  }
};

const store = createStore (combineReducers({
  expenses: expensesReducers,
  filters: filtersReducers
}));

store.subscribe(()=> {
  console.log(store.getState());
})

//addExpenses, removeExpense, editExpennse, setTexFilter, sortByDate, sortByAmount
const addExpenses = ({id = 1, description = 'Rent house', amount = 100000, createdAt = 11323}) => {
  return {
    type: 'ADD_EXPENSES',
    expense: {
      id,
      description,
      amount,
      createdAt
    }
  }
}

console.log('---- addExpenses ----');
let one = store.dispatch(addExpenses({id: 2, description: 'Buy car', amount: 200000, createdAt: 11356}));
let two = store.dispatch(addExpenses({id: 3, description: 'Buy phone', amount: 200000, createdAt: 11356}));
store.dispatch(addExpenses({}));


console.log('---- removeExpense ----');
const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSES',
    id,
  }
}
store.dispatch(removeExpense(one.expense.id));


console.log('---- editExpennse ----');
const editExpennse = (id,updates) => {
  return {
    type: 'EDIT_EXPENSES',
    id,
    updates,
  }
} 
store.dispatch(editExpennse(two.expense.id, {amounnt: 500000}));


console.log('---- setTexFilter ----');
const setTexFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text,
  }
}
store.dispatch(setTexFilter('clothes'));


console.log('---- sortByDate ----');
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE',
  }
}
store.dispatch(sortByDate());


console.log('---- sortByAmount ----');
const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT',
  }
}
store.dispatch(sortByAmount());


// BASIC
let expenses = [
  {id: 1, des: 'Car', amounnt: 100, createdAt: 12233}, 
  {id: 2, des: 'House', amounnt: 200, createdAt: 12223}, 
  {id: 3, des: 'Ring', amounnt: 50, createdAt: 12234}];
console.log('example data: ');
console.log(expenses);

let addExp = ({id = 3, des = 'description', amounnt = 10, createdAt = 12334}, expenses) => {
  return [...expenses, {id, des, amounnt,createdAt}]
};
let exp1 = addExp({}, expenses);
console.log('defautl value: ');
console.log(exp1);

let exp2 = addExp({id: 4, des: 'Gold', amounnt: 500, createdAt: 22234}, expenses);
console.log(exp2);


// App
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />    
      </header>
    </div>
  );
}

export default App;
