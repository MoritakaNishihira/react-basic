import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [num, setNum] = useState(arr.length + 1);
  const [rows, setRows] = useState("ここに表を出します");
  const [isDisp, setIsDisp] = useState("block");
  const tableStyles = {
    table: {
      border: "solid 2px",
      borderCollapse: "collapse",
    },
    th: {
      border: "solid 2px",
      backgroundColor: "yellow",
      padding: "0px 10px",
    },
    tr: { border: "solid 1px" },
    td_no: {
      border: "solid 1px",
      borderRight: "solid 2px",
    },
    td_str: { border: "solid 1px" },
  };
  const onClickCreateTable = () => {
    setRows(() => {
      setIsDisp((prev) => {
        return (prev = "block");
      });
      setNum((prev) => prev + 1);
      setArr((prev) => [...prev, num]);
      return (
        <div>
          <p>表が出ました。ボタンをクリックすると行が増えます。</p>
          <table id="tbl" style={tableStyles.table}>
            <thead id="th">
              <th id="th_row_no" style={tableStyles.th}>
                rowNo
              </th>
              <th id="th_row_str" style={tableStyles.th}>
                rowString
              </th>
            </thead>
            <tbody id="tb">
              {arr.map((str, idx) => {
                return (
                  <tr id={"tr_row_" + Number(idx + 1)} style={tableStyles.tr}>
                    <td
                      id={"td_row_no_" + Number(idx + 1)}
                      style={tableStyles.td_no}
                    >
                      <div>{idx + 1}</div>
                    </td>
                    <td
                      id={"td_row_str_" + Number(idx + 1)}
                      style={tableStyles.td_str}
                    >
                      <div>
                        <ColorfulMessage
                          fontColor="blue"
                          context={str}
                        ></ColorfulMessage>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    });
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>おはこんにちは</h1>
      <div>
        <ColorfulMessage
          fontColor="blue"
          context="お元気ですか？"
        ></ColorfulMessage>
        <ColorfulMessage
          fontColor="red"
          context="はい、元気ですよ!"
        ></ColorfulMessage>
      </div>
      <p></p>
      <button onClick={onClickCreateTable} style={{ display: isDisp }}>
        Display Table !!
      </button>
      <p></p>
      {rows}
    </div>
  );
};
