import React from "react";
import ReactDOM from "react-dom";

class Converter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Scale = {
      c: "Celcius",
      f: "Farenheit"
    };
    let from, to;
    if (this.props.scale === "c") {
      from = Scale.c;
      to = Scale.f;
    }
    if (this.props.scale === "f") {
      from = Scale.f;
      to = Scale.c;
    }
    return (
      <div>
        Lets convert {from} to {to}
      </div>
    );
  }
}

export default Converter;
