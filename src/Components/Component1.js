function ClickEvent1() {
  alert("In the name of Allah");
}

function Component1() {
  return (
    <div>
      <button onClick={ClickEvent1}>Click Me</button>
    </div>
  );
}

export default Component1;
