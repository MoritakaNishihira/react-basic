export const ColofullMessage = (props) => {
  const { fontColor, context } = props;
  const contentStyle = {
    color: fontColor,
    fontSize: "18px",
  };
  return <p style={contentStyle}>{context}</p>;
};
