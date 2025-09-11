import ReactDOM from "react-dom/client";

//JSX
const JSX = (
  <div id="parent">
    <div id="child">
      <h1>I am an h1 tag</h1>
      <h2>I am an h2 tag</h2>
    </div>
    <div id="child2">
      <h1>I am an h1 tag</h1>
      <h2>I am an h2 tag</h2>
    </div>
  </div>
);

//functional component
const JSXComponent = () => {
  return (
    <div id="parent">
      <div id="child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
      </div>
      <div id="child2">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
      </div>
    </div>
  );
};

console.log(parent);
console.log("Okk");

let h2 = <h2>hello from JSX</h2>;
console.log(h2);

// Component Composition
const ComponentComposition = () => {
  return (
    <div id="parent-big">
      Welcome
      <JSXComponent />
    </div>
  );
};

// JSXComponent() === <JSXComponent /> === <JSXComponent></JSXComponent>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ComponentComposition());
