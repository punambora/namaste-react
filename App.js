import React from "react";
import ReactDOM from "react-dom/client";

let parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { className: "header" }, "I am an h1 tag"),
    React.createElement("h2", {}, "I am an h2 tag"),
  ]),
]);

console.log(parent);
console.log("Okk");

let h2 = <h2>hello from JSX</h2>;
console.log(h2);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(h2);
