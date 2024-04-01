# react-basic

React の基本を学ぶ

# index.html

【お作法】index.html は以下の記述のみ

  <html>
    <head>
      <meta charset="utf-8" />
      <title>React Basic</title>
    </head>
    <body>
      <div id="root"></div>
    </body>
  </html>

# App.jsx

コンポーネントは関数で作る
関数名の頭は大文字
const App = () => {....}

コンポーネントの場合、拡張子は jsx にする
App.jsc

複数の html タグが含まれるコンポーネントは <div></div> で囲む
const App = () => {
return (

  <div>
  <h1> hello world !! </h1>
  <p> today is 2024.4.1 </p>
  </div>
  )}

各イベント名は先頭小文字の キャメル記法で書く
イベントは {} で囲む。
<button onClick = {() => {....}}> ボタン </button>

スタイルはオブジェクト形式で記述する。
スタイルはキャメル記法で書く font-size → fontSize
const contentStyle = {
color : "red",
fontSize : "18px"
margin : 10
}
