import { StrictMode } from "react"; // 厳密なルールでreactを定義する
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// rootElement内にコンポーネント(App)をレンダリングする
// index.js も必要最低限の記述のみにし、諸々のコンポーネントは App.jsx に書く
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
