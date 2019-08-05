import React from "react";

class TemperatureInput extends React.Component {
  // handleChange = event => {
  //   this.props.onTempChange(event.target.value);
  // };
  render() {
    return (
      <React.Fragment>
        <input
          name="temperatureInput"
          value={this.props.temperature}
          onChange={this.props.onTempChange}
        />
      </React.Fragment>
    );
  }
}

export default TemperatureInput;
