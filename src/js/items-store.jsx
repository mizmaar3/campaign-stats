let Redux = require('redux');
let ItemReducer = require('./items-reducer.js');
let ReactRedux = require('react-redux');
let Data = require('../data/data.js');

let ItemsStore = Redux.createStore(ItemReducer, Data);

module.exports = ItemsStore;
