import { createRoot } from "react-dom/client";
import React, { useEffect } from "react";
import './app.scss'
function App() {
  useEffect(() => {
    console.log("rendered");
  });
  return <p>Hello</p>;
  // return <App tab="home" />;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
