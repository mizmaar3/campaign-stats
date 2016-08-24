let React = require('react');
let ReactDOM = require('react-dom');
let Radio = require('../common-ui/Radio.jsx');

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

    return (
      <div >
        <h1>Statistics</h1>
        <Radio
          values={RadioBtnValues}
          checked={0}
          name={"filter-radio"}
          onChange={this.onFilterValueChange} />
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElementById("main"));
