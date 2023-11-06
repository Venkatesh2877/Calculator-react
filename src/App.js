import "./styles.css";
import Display from "./Display";
import { useState, createContext } from "react";

const intitialState = {
  value: null,
  signValue: null
};

export const CalContext = createContext(intitialState);

export default function App() {
  const [val, setVal] = useState("0");
  const [signValue, setSignValue] = useState("");
  const [first, setFirst] = useState("0");

  const user = {
    val
  };

  const handleValue = (value) => {
    if (val === "0") {
      setVal(value);
    } else {
      setVal(val + value);
    }
  };

  const handleSign = (value) => {
    setSignValue(value);
    setFirst(val);
    setVal("0");
  };

  const handleSignSwitch = () => {
    setVal(val * -1);
  };
  const handleResult = () => {
    console.log(val, first);
    switch (signValue) {
      case "+":
        var ans = parseFloat(first) + parseFloat(val);
        var roundedNumber = Number.isInteger(ans) ? ans : ans.toFixed(2);
        setVal(roundedNumber);
        break;
      case "-":
        ans = first - val;
        roundedNumber = Number.isInteger(ans) ? ans : ans.toFixed(2);
        setVal(roundedNumber);
        break;
      case "*":
        var ans = parseFloat(first) * parseFloat(val);
        var roundedNumber = Number.isInteger(ans) ? ans : ans.toFixed(2);
        setVal(roundedNumber);
        break;
      case "/":
        var ans = parseFloat(first) / parseFloat(val);
        var roundedNumber = Number.isInteger(ans) ? ans : ans.toFixed(2);
        setVal(roundedNumber);
        break;
      case "%":
        var ans = parseFloat(first) % parseFloat(val);
        var roundedNumber = Number.isInteger(ans) ? ans : ans.toFixed(2);
        setVal(roundedNumber);
        break;
      default:
        setVal("0");
    }
  };

  const handleClear = () => {
    setVal("0");
    setSignValue("");
    setFirst("0");
  };

  return (
    <CalContext.Provider value={user}>
      <div className="App">
        <Display />
        <div className="grid-container">
          <div onClick={() => handleClear()}>C</div>
          <div onClick={() => handleSignSwitch()}>+-</div>
          <div onClick={() => handleSign("%")}>%</div>
          <div className="sign" onClick={() => handleSign("/")}>
            /
          </div>
          <div onClick={() => handleValue("7")}>7</div>
          <div onClick={() => handleValue("8")}>8</div>
          <div onClick={() => handleValue("9")}>9</div>
          <div className="sign" onClick={() => handleSign("*")}>
            x
          </div>
          <div onClick={() => handleValue("4")}>4</div>
          <div onClick={() => handleValue("5")}>5</div>
          <div onClick={() => handleValue("6")}>6</div>
          <div className="sign" onClick={() => handleSign("-")}>
            -
          </div>
          <div onClick={() => handleValue("1")}>1</div>
          <div onClick={() => handleValue("2")}>2</div>
          <div onClick={() => handleValue("3")}>3</div>
          <div className="sign" onClick={() => handleSign("+")}>
            +
          </div>
          <div className="item17" onClick={() => handleValue(0)}>
            0
          </div>
          <div onClick={() => handleValue(".")}>.</div>
          <div className="sign" onClick={() => handleResult()}>
            =
          </div>
        </div>
      </div>
    </CalContext.Provider>
  );
}
