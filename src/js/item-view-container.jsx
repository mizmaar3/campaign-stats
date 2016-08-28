let React = require('react');
let ReactDOM = require('react-dom');
let ReactRedux = require('react-redux');
let ItemStore = require('./items-store.jsx');
let ItemActions = require('./items-actions.js');

/**
* ItemViewGenerator:
* It defines view of each item
**/

let ItemViewGenerator = React.createClass({
  onItemDeleteBtnClick(e) {
    let itemIdToRemove = e.target.getAttribute("data-id");
    ItemStore.dispatch(ItemActions.deleteItem(itemIdToRemove));
  },
  render() {
    let items = this.props.items || [];
    let eachItemView = [];
    if (items.length > 0) {
      eachItemView = items.map((item, i) => {
        return (
          <div key={"view"+i} className="item-view-container">
            <h2>{item.title}</h2>
            <span>Balance: {item.balance}</span>
            <button data-id={item.id} onClick={this.onItemDeleteBtnClick}
              className="item-delete-button">Delete</button>
          </div>
        )
      });
    } else {
      eachItemView = (
        <div> No Record Found...</div>
      )
    }

    return (
      <div className="item-view-wrapper">
        {eachItemView}
      </div>
    )
  }

});


/**
* Connect Redux to ItemViewGenerator component
* So it can listen ItemStore state
**/
let ItemView = ReactRedux.connect(
  function mapStateToProps(state) {
      return { items: state.filteredItems };
  })(ItemViewGenerator);

module.exports = ItemView;
