let Reducer = require('./reducer.js');
let Actions = require('./actions.js');
let Redux = require('redux');
let ReactRedux = require('react-redux');

let items = [
  {
    id: 1,
    title: "Item 1",
    balance: 200,
  },
  {
    id: 2,
    title: "item 2",
    balance: 400,
  },
  {
    id: 3,
    title: "item 3",
    balance: 1000,
  }
];

let ItemsStore = Redux.createStore(Reducer, [...items]);

module.exports = ItemsStore;
