import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers } from 'redux';
const uuidv1 = require('uuid/v1');


// let demoState = {
//   expenses: [{
//     id: 1,
//     description: 'Bought house',
//     amount: 50000,
//     createdAt: 55500
//   }],
//   filters: {
//     text: 'house',
//     sortBy: 'amount',
//     startAt: undefined,
//     endAt: undefined
//   }
// }


// SET_DATE_START
// SET_DATE_END

// ADD_EXPENSE
const addExpense = ({id = uuidv1(), description = "Rent house", amount = 10000, createdAt = 1131313} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id,
      description,
      amount,
      createdAt
    }

  }
}

// EDIT_EXPENSE
const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  }
}

// REMOVE_EXPENSE
const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  }
}

// SET_TEXT_FILTER
const setTextFilter = (text = '') => {
  return {
    type: 'SET_TEXT_FILTER',
    text
  }
}

// SORT_BY_DATE
const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  }
}

// SORT_BY_AMOUNT
const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  }
}

const setStartDate = (date = undefined) => {
  return {
    type: 'SET_START_DATE',
    date
  }
}
const setEndDate = (date = undefined) => {
  return { 
    type: 'SET_END_DATE', 
    date 
  }
}

const getInvisibleExpenses = (expenses, { text, sortBy, startDate, endDate}) => {
  return  expenses.filter((expense) => {
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt;
    const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt;
    return textMatch && startDateMatch && endDateMatch;
  }).sort(function(a, b) {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }else if(sortBy === 'amount'){
      return a.Amount < b.Amount ? 1 : -1;
    }
  });
}

const stateExpenseDefault = [];

const expensesReducers = (state = stateExpenseDefault, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((exp) => {
        if(exp.id === action.id) {
          return { 
            ...exp, 
            ...action.updates
          }
        }else {
          return exp;
        }
      })
      
    default:
      return state;
  }
}

const stateFiltersDefault = {
      text: '',
      sortBy: 'amount',
      startDate: undefined,
      endDate: undefined
};

const filtersReducers = (state = stateFiltersDefault, action) => {
  switch (action.type){
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text}
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date'}
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount'}
    case 'SET_START_DATE':
      return { ...state, startDate: action.date}
    case 'SET_END_DATE':
      return { ...state, endDate: action.date}
    default:
      return state;
  }
}


const store = createStore(combineReducers({
  expenses: expensesReducers,
  filters: filtersReducers
}));

store.subscribe(() => {
  const state = store.getState();
  console.log(getInvisibleExpenses(state.expenses, state.filters));
})

 let one = store.dispatch(addExpense({description: "Buy car", amount: 50000, createdAt:-1000}));
 let two = store.dispatch(addExpense({description: "Buy house", amount: 1000000, createdAt:2000}));
//store.dispatch(removeExpense(one.expense.id));
//store.dispatch(editExpense(two.expense.id, { amount: 500000, description: "Mua vang"}));
//store.dispatch(setTextFilter('Car'));
store.dispatch(sortByDate());
store.dispatch(sortByAmount());
//store.dispatch(setStartDate(-1000));
//store.dispatch(setEndDate(0));
//store.dispatch(setStartDate());



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
