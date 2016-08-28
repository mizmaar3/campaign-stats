let _ = require('lodash');
let C = require('./constants');

function getFilteredItems(records, type) {
  let filteredItems;
  if (type === C.FILTER_POSITIVE) {
    filteredItems = _.filter(records, (itm) => {
      return itm.balance > -1;
    });
  }

  if (type === C.FILTER_NEGATIVE) {
    filteredItems = _.filter(records, (itm) => {
      return itm.balance < 0;
    });
  }

  if (type === C.FILTER_NONE) {
    filteredItems = records;
  }

  return filteredItems;
}

let Reducer = (state={}, action) => {
  switch(action.type) {
    case C.ADD_ITEM:
      return {
        filterBy: state.filterBy,
        records: [...state.records, action.payload],
        filteredItems: getFilteredItems([...state.records, action.payload], state.filterBy)
      }
    case C.DELETE_ITEM:
      state = _.filter(state, (itm) => {
        return itm.id != action.payload.id
      });
     return [...state]
    case C.FILTER_ITEM:
      let filtered = getFilteredItems(state.records, action.payload.filterType);
      return {
        filterBy: action.payload.filterType,
        records: state.records,
        filteredItems: [...filtered]
      }
    default:
     return state
  }

};

module.exports = Reducer;
