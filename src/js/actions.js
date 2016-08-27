const uid = () => Math.random().toString(34).slice(2);

let Actions = {
  addItem: (title, balance) => {
    return {
      type: 'ADD_ITEM',
      payload: {
        id: uid(),
        title: title,
        balance: balance
      }
    }
  },

  deleteItem: (id) => {
    return {
      type: 'DELETE_ITEM',
      payload: {
        id: id
      }
    }
  }

};


module.exports = Actions;
