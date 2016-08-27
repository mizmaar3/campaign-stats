let _ = require('lodash');
let C = require('./constants');

let Reducer = (state={}, action) => {
  switch(action.type) {
    case C.ADD_ITEM:
      return [
        ...state,
        action.payload
      ]
    case C.DELETE_ITEM:
      state = _.filter(state, (itm) => {
        return itm.id != action.payload.id
      });
     return [...state]
    default:
     return state
  }

};

module.exports = Reducer;
