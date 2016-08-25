let React = require('react');

let ItemView = React.createClass({

  render() {

    let records = this.props.items.map((item, i) => {
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

module.exports = ItemView;
