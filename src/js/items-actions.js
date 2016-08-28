let uid = require('./constants.js').uid;
let C = require('./constants');

/**
* All the actions appilcable in this app
*/
let ItemActions = {
  /**
  * When item added send its uid, title, balance to ItemStore
  **/
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
  /**
  * To delete an item from ItemStore
  **/
  deleteItem: (id) => {
    return {
      type: C.DELETE_ITEM,
      payload: {
        id: id
      }
    }
  },
  /**
  * Set how to filter ItemStore records
  **/
  filterItems: (filterType) => {
    return {
      type: C.FILTER_ITEM,
      payload: {
        filterType: filterType
      }
    }
  }
};


module.exports = ItemActions;
