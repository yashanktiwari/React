import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1", {id: "heading1"}, "I am h1");
const heading2 = React.createElement("h2", {id: "heading2"}, "I am h2");

const innerDiv = React.createElement("div", {id: "innerDiv"}, [heading2, heading1]);

const outerDiv = React.createElement("div", {id: "outerDiv"}, innerDiv);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(outerDiv);