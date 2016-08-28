let React = require('react');
let ReactDOM = require('react-dom');
let ItemActions = require('./items-actions.js');
let ItemStore = require('./items-store.jsx');


let AddItemView = React.createClass({
  /**
  * dispatch addIem when submit click
  **/
  onSubmitClick() {
    let title = this.refs.campaignName.value;
    let balance = this.refs.campaignBalance.value;
    ItemStore.dispatch(ItemActions.addItem(title, balance));
  },

  render() {
    return (
      <div className="add-item-view-wrapper">
        <h2>Add New Campaign</h2>
        <input
          type="text"
          ref="campaignName"
          className="text-input"
          key="add-campaign-name"
          id="add-campaign-name" />

        <input type="text"
          className="text-input"
          ref="campaignBalance"
          key="add-campaign-balance"
          id="add-campaign-balance" />

        <button
          className="submit-button"
          onClick={this.onSubmitClick}>Submit</button>
      </div>
    )
  }

});

module.exports = AddItemView;
