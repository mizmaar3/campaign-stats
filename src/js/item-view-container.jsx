let React = require('react');
let ReactDOM = require('react-dom');
let ReactRedux = require('react-redux');
let Actions = require('./actions.js');

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



let ItemView = ReactRedux.connect(
  function mapStateToProps(state) {
      return { items: state };
  })(ItemViewGenerator);

module.exports = ItemView;
