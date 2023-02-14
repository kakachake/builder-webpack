import ReactDom from "react-dom/client";
import React from "react";
import App from "./page";

const { say } = await import("./helloworld");

// eslint-disable-next-line no-console
console.log(say("hello webpack"));

ReactDom.createRoot(document.getElementById("root")).render(<App />);
