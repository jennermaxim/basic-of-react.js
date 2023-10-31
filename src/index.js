import React from "react";
import ReactDOM from "react-dom";

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

ReactDOM.render(elmtclose, document.getElementById("root"));
