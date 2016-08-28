let React = require('react');
let ReactDOM = require('react-dom');
let ItemActions = require('./items-actions.js');
let ItemStore = require('./items-store.jsx');
let ValidationUtils = require('./validation-utils.js');


let AddItemView = React.createClass({
  getInitialState(){
    return {
      errors: []
    }
  },
  /**
  * dispatch addIem when submit click
  **/
  onSubmitClick() {
    let title = this.refs.campaignName.value;
    let balance = this.refs.campaignBalance.value;
    let errors = this.validationCheck();
    // Add item when there is no error
    if(errors.length === 0) {
      ItemStore.dispatch(ItemActions.addItem(title, balance));
    }
  },

  /**
  * Lazy Validation Check
  * TODO: make input fields as common-ui
  * and set validation as prop so it can be handled explicitly
  **/
  validationCheck() {
    let validationReply = [];

    if (ValidationUtils.isEmpty(this.refs.campaignName.value)) {
      validationReply.push({
        label: "Campaign Name",
        msg: "It should not be empty"
      });
    }

    if (!!ValidationUtils.isNumber(this.refs.campaignBalance.value) ||
        ValidationUtils.isEmpty(this.refs.campaignBalance.value)) {
      validationReply.push({
        label: "Campaign Balance",
        msg: "It should be number"
      });
    }

    this.setState({
      errors: [...validationReply]
    });
    return validationReply;
  },

  render() {

    let errors = null;

    if(this.state.errors.length > 0) {
      errors =  this.state.errors.map((err, i) => {
        return (
            <div key={"err"+i}>
              <span>Error in {err.label}: </span>
              <span>{err.msg}</span>
            </div>
          )
        });
    }

    return (
      <div className="add-item-view-wrapper">
        <h2>Add New Campaign</h2>
        <div className="text-input-wrapper">
          <label>Campaign Name</label>
          <input
            type="text"
            ref="campaignName"
            className="text-input"
            key="add-campaign-name"
            id="add-campaign-name" />
        </div>

        <div className="text-input-wrapper">
          <label>Campaign Balance</label>
          <input type="text"
            className="text-input"
            ref="campaignBalance"
            key="add-campaign-balance"
            id="add-campaign-balance" />
        </div>

        <div className="submit-button-wrapper">
          <button
            className="submit-button"
            onClick={this.onSubmitClick}>Submit</button>
        </div>

        <div className="errors-wrapper">
          {errors}
        </div>
      </div>
    )
  }

});

module.exports = AddItemView;
