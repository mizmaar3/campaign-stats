let React = require('react');

let Radio = React.createClass({

  onChange (event) {
    var value = event.target.value;
    this._onChange(value, event, this);
  },

  _onChange() {
    if (this.props.onChange) {
      this.props.onChange.apply(null, arguments);
    }
  },

  render () {
    let radioBtnInputs = this.props.values.map((item, i) => {
      return (
        <div key={"radio-wrapper-"+i} className="radio-input-wrapper">
          <input
            key={i}
            type={"radio"}
            name={this.props.name}
            value={item.value}
            checked={this.props.checked === i}
            onChange={this.onChange} />
          <label>{item.label}</label>
        </div> )
    });

    return (
      <div className="radio-inline">
        {radioBtnInputs}
       </div>
    );
  }

});

module.exports = Radio;
