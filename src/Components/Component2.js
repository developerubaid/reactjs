import { Component } from "react/cjs/react.production.min";

function buttonClick() {
  alert("Button 2 is clicked.");
}

function Component2() {
  return (
    <div>
      <button onClick={buttonClick}>Button2</button>
    </div>
  );
}

export default Component2;
