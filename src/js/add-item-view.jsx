let React = require('react');
let AddItemView = React.createClass({

  render() {
    return (
      <div className="add-item-view-wrapper">
        <h2>Add New Campaign</h2>
        <input
          type="text"
          className="text-input"
          key="add-campaign-name"
          id="add-campaign-name" />

        <input type="text"
          className="text-input"
          key="add-campaign-balance"
          id="add-campaign-balance" />

        <button className="submit-button">Submit</button>
      </div>
    )
  }

});

module.exports = AddItemView;
