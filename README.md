# react-basic

React の基本を学ぶ

# index.html

【お作法】index.html は以下の記述のみ
```
  <html>
    <head>
      <meta charset="utf-8" />
      <title>React Basic</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>
```

# App.jsx

コンポーネントは関数で作る
関数名の頭は大文字
```
const App = () => {....}
```

コンポーネントの場合、拡張子は jsx にする
App.jsx

複数の html タグが含まれるコンポーネントは ```<div></div>``` で囲む
```
const App = () => {
return (

  <div>
  <h1> hello world !! </h1>
  <p> today is 2024.4.1 </p>
  </div>
  )}
```

各イベント名は先頭小文字の キャメル記法で書く
処理は { } で囲んで関数で作る。
```
<button onClick = {() => {....}}> ボタン </button>
```

スタイルはオブジェクト形式で記述する。
スタイルはキャメル記法で書く font-size → fontSize
```
const contentStyle = {
color : "red",
fontSize : "18px"
margin : 10
}
```

# index.js

index.js も必要最低限の記述のみにし、必要なコンポーネントは App.jsx に書く
StrictMode とは、<StrictMode></StrictMode>で囲まれた範囲を厳密なルールで react を定義する
下記の場合、root という ID を持つ element 配下に App コンポーネントをレンダリングしている

```
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// rootElement 内にコンポーネント(App)をレンダリングする
// index.js も必要最低限の記述のみにし、諸々のコンポーネントは App.jsx に書く
root.render(
<StrictMode>
<App></App>
</StrictMode>
);
```
# props

コンポーネントへの引数
コンポーネントの振る舞いを切り替える場合などに使う
コンポーネントタグの中に書く
下記の場合 fontColor と context が props として渡される
```
<ColofullMessage fontColor = "blue" context = "お元気ですか？"></ColofullMessage>
```

受け取った側では下記のように使う
```
export const ColofullMessage = (props) => {
const {fontColor , context} = props
const contentStyle = {
color : fontColor,
fontSize : "18px"
}
return <p style={contentStyle}>{context}</p>;
};
```
