import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RadioInput from '../common-ui/radio-input.jsx';
import ItemView from './item-view-container.jsx';
import AddItemView from './add-item-view.jsx';
import ItemActions from './items-actions.js';
import Redux from 'redux';
import { Provider } from 'react-redux';
import ItemStore from './items-store.jsx';
import C from './constants';
import '../less/main.less';

class Main extends Component {
  constructor() {
    super()
    this.state = {
      filterBy: C.FILTER_NONE
    }

    this.onFilterValueChange = this.onFilterValueChange.bind(this);
  }

  onFilterValueChange(value) {
    ItemStore.dispatch(ItemActions.filterItems(value));
    this.setState({
      filterBy: value
    });
  }

  render() {
    const RadioBtnValues = [
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

        <Provider store={ItemStore} >
          <ItemView />
        </Provider>

        <AddItemView />

      </div>
    )
  }
}


ReactDOM.render(<Main />, document.getElementById("main"));
