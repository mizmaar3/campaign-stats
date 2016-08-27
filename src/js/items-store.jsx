let Reducer = require('./reducer.js');
let Actions = require('./actions.js');
let Redux = require('redux');
let ReactRedux = require('react-redux');
let Data = require('../data/data.js');

let ItemsStore = Redux.createStore(Reducer, [...Data]);

module.exports = ItemsStore;
