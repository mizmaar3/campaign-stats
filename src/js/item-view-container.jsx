import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import ItemStore from './items-store.jsx';
import ItemActions from './items-actions.js';

/**
* ItemViewGenerator:
* It defines view of each item
**/

class ItemViewGenerator extends Component  {
  constructor() {
    super();
    this.onItemDeleteBtnClick = this.onItemDeleteBtnClick.bind(this);
  }

  onItemDeleteBtnClick(e) {
    const confirmation = confirm("Click OK to confirm deletion!");
    if (confirmation) {
      const itemIdToRemove = e.target.getAttribute("data-id");
      ItemStore.dispatch(ItemActions.deleteItem(itemIdToRemove));
    }
  }

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
        <div> No Record Available...</div>
      )
    }

    return (
      <div className="item-view-wrapper">
        {eachItemView}
      </div>
    )
  }
}


/**
* Connect Redux to ItemViewGenerator component
* So it can listen ItemStore state
**/
const ItemView = connect(
  function mapStateToProps(state) {
    return {
      items: state.filteredItems
    };
  }
)(ItemViewGenerator);


export default ItemView;
