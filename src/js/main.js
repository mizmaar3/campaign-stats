let React = require('react');
let ReactDOM = require('react-dom');
let RadioInput = require('../common-ui/radio-input.jsx');
let ItemView = require('./item-view.jsx');
let AddItemView = require('./add-item-view.jsx');

let Main = React.createClass({
  getInitialState(){
    return {
      filterBy: null
    }
  },
  onFilterValueChange(value) {
    console.log(value);
  },
  render() {
    let RadioBtnValues = [
      {
        label: "All",
        value: "all",
      },
      {
        label: "Positive Balance",
        value: "positive-balance",
      },
      {
        label: "Negative Balance",
        value: "negative-balance",
      }
    ];

    let viewItems = [
      {
        title: "Item 1",
        balance: 200,
      },
      {
        title: "item 2",
        balance: 400,
      },
      {
        title: "item 3",
        balance: 1000,
      }
    ];

    return (
      <div>
        <h1>Statistics</h1>
        <RadioInput
          values={RadioBtnValues}
          checked={0}
          name={"filter-radio"}
          onChange={this.onFilterValueChange} />

        <ItemView items={viewItems} />
        <AddItemView />

      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("main"));
