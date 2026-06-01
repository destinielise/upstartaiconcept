import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { UpstartApp } from "./upstart/UpstartApp";
import "./styles/index.css";
import "./styles/tailwind.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <UpstartApp />
  </BrowserRouter>
);
