let Redux = require('redux');
let ItemReducer = require('./items-reducer.js');
let ReactRedux = require('react-redux');
let Data = require('../data/data.js');
let _ = require('lodash');
let C = require('./constants.js');

let InitialState = _.extend(Data,
                  {
                    filterBy: C.FILTER_NONE,
                    filteredItems: Data.records
                  });

let ItemsStore = Redux.createStore(ItemReducer, InitialState);

module.exports = ItemsStore;
