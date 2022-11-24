import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { provider, ProviderComposer } from "./hooks/compose";
import { TaskContextProvider } from "./hooks/TaskContext";
import { UserContextProvider } from "./hooks/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProviderComposer
    providers={[
      provider(UserContextProvider),
      provider(TaskContextProvider),
    ]}
  >
    <Router>
      <App />
    </Router>
  </ProviderComposer>
);
