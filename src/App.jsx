import { ColofullMessage } from "./components/ColorfullMessage";

export const App = () => {
  const onClickButton = () => {
    return alert("おした！");
  };
  return (
    <div>
      <h1 style={{ color: "red" }}>おはこんにちは</h1>
      <div>
        <ColofullMessage
          fontColor="blue"
          context="お元気ですか？"
        ></ColofullMessage>
        <ColofullMessage
          fontColor="red"
          context="はい、元気ですよ！"
        ></ColofullMessage>
      </div>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};
