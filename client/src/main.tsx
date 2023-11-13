import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "src/index.css";
import { Provider } from "react-redux";
import store from "src/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
