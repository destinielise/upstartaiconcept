
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./styles/index.css";
import "@shopify/polaris/build/esm/styles.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";

createRoot(document.getElementById("root")!).render(
  <AppProvider i18n={enTranslations}>
    <App />
  </AppProvider>
);
  