import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import "./index.css";
import { getProductsRequested } from "./redux/products/productsSlice";

const container = document.getElementById("root")!;
const root = createRoot(container);

store.dispatch(getProductsRequested());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
