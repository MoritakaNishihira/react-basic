export const ColorfulMessage = (props) => {
  const { fontColor, context } = props;
  const contentStyle = {
    color: fontColor,
    fontSize: "16px",
    margin: 0,
  };
  return <p style={contentStyle}>{context}</p>;
};
