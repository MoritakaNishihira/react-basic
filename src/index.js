import { StrictMode } from "react"; // 厳密なルールでreactを定義する
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// コンポーネントは関数で作る
// 関数名の頭は大文字
const App = () => {
  return (
    // 複数のhtmlタグが含まれるコンポーネントは <div></div>で囲む
    <div>
      <h1>おはこんにちは</h1>
      <p>react</p>
    </div>
  );
};

root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
