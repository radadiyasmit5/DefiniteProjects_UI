import React from "react";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";

const Index = () => {
  // const queryClient = useQueryClient();
  return (
    <div>
      {/* <QueryClientProvider client={queryClient}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </QueryClientProvider> */}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Index />);
