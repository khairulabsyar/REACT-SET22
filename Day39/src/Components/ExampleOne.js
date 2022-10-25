import React from "react";

export class ExampleOne extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.src}
          alt=""
          style={{ width: "250px", height: "250px" }}
        />
      </div>
    );
  }
}
