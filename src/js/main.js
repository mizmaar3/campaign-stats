let React = require('react');
let ReactDOM = require('react-dom');
let RadioInput = require('../common-ui/radio-input.jsx');
let ItemView = require('./item-view-container.jsx');
let AddItemView = require('./add-item-view.jsx');
let Reducer = require('./reducer.js');
let Actions = require('./actions.js');
let Redux = require('redux');
let ReactRedux = require('react-redux');
let Store = require('./items-store.jsx');
let C = require('./constants');

top.store = Store;
top.action = Actions;
let Main = React.createClass({
  getInitialState(){
    return {
      filterBy: C.FILTER_NONE
    }
  },
  onFilterValueChange(value) {
    Store.dispatch(Actions.filterItems(value));
    this.setState({
      filterBy: value
    });
  },
  render() {
    let RadioBtnValues = [
      {
        label: "All",
        value: C.FILTER_NONE,
      },
      {
        label: "Positive Balance",
        value: C.FILTER_POSITIVE,
      },
      {
        label: "Negative Balance",
        value: C.FILTER_NEGATIVE,
      }
    ];


    return (
      <div>
        <h1>Statistics</h1>

        <RadioInput
          values={RadioBtnValues}
          checked={this.state.filterBy}
          name={"filter-radio"}
          onChange={this.onFilterValueChange} />

        <ReactRedux.Provider store={Store} >
          <ItemView />
        </ReactRedux.Provider>

        <AddItemView />

      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("main"));
