import React from "react";
import TemperatureInput from "./TemperatureInput";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "43",
      scale: "c"
    };
  }

  handleCelsiusChange = event => {
    this.setState({ temperature: event.target.value, scale: "c" });
  };

  handleFareChange = event => {
    this.setState({ temperature: event.target.value, scale: "f" });
  };

  render() {
    let celcius;
    let fahrenheit;

    if (this.state.scale === "c") {
      celcius = this.state.temperature;
      const input = parseFloat(celcius);
      fahrenheit = ((input - 32) * 5) / 9;
    }

    if (this.state.scale === "f") {
      fahrenheit = this.state.temperature;
      const input = parseFloat(fahrenheit);
      celcius = (input * 9) / 5 + 32;
    }

    return (
      <>
        <h1>Temperature Convertor</h1>
        Celcius :
        <TemperatureInput
          scale="c"
          temperature={celcius}
          onTempChange={this.handleCelsiusChange}
        />
        <br />
        Fahrenheit :
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTempChange={this.handleFareChange}
        />
      </>
    );
  }
}
export default Calculator;
