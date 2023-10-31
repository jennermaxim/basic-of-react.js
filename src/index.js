import React from "react";
import ReactDOM from "react-dom";
// import Car from "./App.js";

const myelm = (
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>Jenner</td>
    </tr>
    <tr>
      <td>Maxim</td>
    </tr>
  </table>
);

const myelmjsx = <h1>I Love JSX</h1>;
const myelmwjsx = React.createElement("h1", {}, "I do not use JSx");

const express = <h1>React is {5 + 5} times better with JSX</h1>;
const elmtinsert = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const elmtop = (
  <div>
    <h1>I am Header</h1>
    <h1>I am a Header too</h1>
  </div>
);

const elmtclose = <input type="text" />;

// class Car extends React.Component {
//     constructor() {
//       super();
//       this.state = { color: "red" };
//     }

//   render() {
//     return <h2>Hi, I am {this.props.color} a Car!</h2>;
//     return <h2>I am a Car!</h2>;
//   }
// }

class Car extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>I am a {this.props.brand.model}!</h2>;
  }
}
const elmtprops = <Car brand="BMW" />;

class Garage extends React.Component {
  render() {
    // const carname = "BMW";
    const carinfo = { name: "BMW", model: "Mustang" };
    return (
      <div>
        <h1>Who lives in my Garage?</h1>
        <Car brand={carinfo} />
      </div>
    );
  }
}

function Car2() {
  return <h2>Hi, I am also a Car!</h2>;
}

ReactDOM.render(<Garage />, document.getElementById("root"));
