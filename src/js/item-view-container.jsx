let React = require('react');
let ReactDOM = require('react-dom');
let ReactRedux = require('react-redux');

/**
* ItemViewGenerator:
* It defines view of each item
**/

let ItemViewGenerator = React.createClass({
  render() {
    let items = this.props.items || [];
    let records = items.map((item, i) => {
      return (
        <div key={"view"+i} className="item-view-container">
          <h2>{item.title}</h2>
          <span>Balance: {item.balance}</span>
        </div>
      )
    });

    return (
      <div className="item-view-wrapper">
        {records}
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
