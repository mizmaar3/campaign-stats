let uid = require('./constants.js').uid;
let C = require('./constants');

let Actions = {
  addItem: (title, balance) => {
    return {
      type: C.ADD_ITEM,
      payload: {
        id: uid(),
        title: title,
        balance: balance
      }
    }
  },

  deleteItem: (id) => {
    return {
      type: C.DELETE_ITEM,
      payload: {
        id: id
      }
    }
  },
  filterItems: (filterType) => {
    return {
      type: C.FILTER_ITEM,
      payload: {
        filterType: filterType
      }
    }
  }
};


module.exports = Actions;
