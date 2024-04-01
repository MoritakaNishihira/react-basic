export const App = () => {
  const onClickButton = () => {
    return alert("おした！");
  };

  const contentStyle = {
    color: "blue",
    fontSize: "16px",
    margin: 100,
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>おはこんにちは</h1>
      <p style={contentStyle}>お元気ですか？？</p>
      <button onClick={onClickButton}>ボタン</button>
    </div>
  );
};
